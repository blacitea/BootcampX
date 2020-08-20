const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS name
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${process.argv[2]}'
  ORDER BY teacher;
`)
  .then(resolved => {
    resolved.rows.forEach(cohort => console.log(`${cohort.name}: ${cohort.teacher}`));
  })
  .catch(err => console.error('query error', err.stack));