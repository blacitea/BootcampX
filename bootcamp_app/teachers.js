require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE
});

let input = [`%${process.argv[2]}%`];

const query = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS name
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`;

pool.query(query,input)
  .then(res => console.log(res.rows))
  .catch(err => console.error('query error', err.stack));
//.finally(() => pool.end());