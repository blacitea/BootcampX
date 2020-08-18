SELECT COUNT(ars) AS total_assistances, name
  FROM assistance_requests ars
  JOIN teachers t ON ars.teacher_id = t.id
  WHERE name = 'Waylon Boehm'
  GROUP BY name;