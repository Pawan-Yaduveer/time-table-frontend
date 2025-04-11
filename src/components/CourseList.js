
import React, { useEffect, useState } from "react";
import { fetchCourses } from "../api";

function CourseList({ refreshTrigger }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    loadCourses();
  }, [refreshTrigger]);

  return (
    <div>
      <h3>Course List</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            {course.code} - {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
