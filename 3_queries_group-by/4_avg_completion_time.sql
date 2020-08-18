SELECT name AS student, AVG(assignment_submissions.duration) AS average_assignment_duration
  FROM assignment_submissions
  JOIN students ON student_id = students.id
  WHERE students.end_date IS NULL -- correct ans // WHERE end_date IS NULL
  GROUP BY name -- correct ans // GROUP BY student
  ORDER BY average_assignment_duration DESC;