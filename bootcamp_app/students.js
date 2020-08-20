const { Pool } = require('pg');

const pool = new Pool({   // an object with value for set up a pool
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();     // connect to the db, just like psql in terminal
let name = process.argv[2];
let limit = process.argv[3];

pool.query(`
  SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${name}%'
  LIMIT ${limit};
`)
  .then(resolved => {
    console.log(resolved.rows); // rows key store the query result, a array of objects
    resolved.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(error => console.error('query error', error.stack));
