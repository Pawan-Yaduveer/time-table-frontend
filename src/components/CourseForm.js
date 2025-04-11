
import React, { useState } from "react";
import { addCourse } from "../api";

function CourseForm({ onAdd }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code && name) {
      await addCourse({ code, name });
      onAdd();
      setCode("");
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Course</h3>
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Course Code" required />
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Course Name" required />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;
