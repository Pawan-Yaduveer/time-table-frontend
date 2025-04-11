const BASE_URL = "http://13.51.11.25:8080/api/timetable";

export const fetchCourses = async () => {
  const res = await fetch(`${BASE_URL}/course`);
  return res.json();
};

export const addCourse = async (course) => {
  await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course),
  });
};

export const fetchTimeSlots = async () => {
  const res = await fetch(`${BASE_URL}/timeslot`);
  return res.json();
};
