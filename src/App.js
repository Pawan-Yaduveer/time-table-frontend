
import React, { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import TimeSlotList from "./components/TimeSlotList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>Timetable Management</h1>
      <CourseForm onAdd={triggerRefresh} />
      <CourseList refreshTrigger={refresh} />
      <TimeSlotList />
    </div>
  );
}

export default App;
