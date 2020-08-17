-- inner join, only data that matches on both will be returned
SELECT students.name AS student_name, email, cohorts.name AS cohort_name
  FROM students JOIN cohorts ON cohorts.id = cohort_id;

-- unmatch from the left table will be returned (FROM)
SELECT students.name AS student_name, email, cohorts.name AS cohort_name
  FROM students LEFT JOIN cohorts ON cohorts.id = cohort_id;

-- unmatch from the right table will be returned (JOIN)
SELECT students.name AS student_name, email, cohorts.name AS cohort_name
  FROM students RIGHT JOIN cohorts ON cohorts.id = cohort_id;

-- all unmatch from both sides will be returned
SELECT students.name AS student_name, email, cohorts.name AS cohort_name
  FROM students FULL OUTER JOIN cohorts ON cohorts.id = cohort_id;