require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE
});

pool.connect();     // connect to the db, just like psql in terminal
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const value = [`%${cohortName}%`, limit];

pool.query(`
  SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`, value)
  .then(resolved => {
    console.log(resolved.rows); // rows key store the query result, a array of objects
    resolved.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(error => console.error('query error', error.stack));
