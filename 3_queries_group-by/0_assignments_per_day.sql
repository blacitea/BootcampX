SELECT day, COUNT(id)
  FROM assignments
  GROUP BY day
  ORDER BY day;