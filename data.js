import e from "express";

// data.js — mock "database"
const courses = [
  {
    id: 1,
    title: "Java Fullstack Bootcamp",
    number: "111111111111111111111111111",
    url:"https://example.com/course/2",
    startdate:"2024-01-01",
    enddate:"2024-06-01",
    description: "Learn Java, Spring Boot, React, and deploy fullstack apps.",
    image: "https://picsum.photos/id/1015/1200/630" // 1200x630 example
  },
  {
    id: 2,
    title: "Python for Data Science",
    number: "111111111111111111111111111",
    name:"Python for Data Scienceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    url:"https://example.com/course/2",
    startdate:"2024-01-01",
    enddate:"2024-06-01",
    description: "Hands-on Python, Pandas, NumPy, ML models, and visualization.",
    image: "https://picsum.photos/id/1024/1200/630"
  }
];

export default courses;

