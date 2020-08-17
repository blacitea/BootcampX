SELECT COUNT(id)
  FROM students
  WHERE cohort_id < 4;
  -- CORRECT ANS WHERE cohort_id IN (1, 2, 3);