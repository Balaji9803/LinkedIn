// server.js — Express + EJS (ES Module)
import express from "express";
import path from "path";
import courses from "./data.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Helper: compute absolute URL (used in og:url)
function absoluteUrl(req, courseId) {
  const proto = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}/course/${courseId}`;
}

app.get("/", (req, res) => {
  res.send(
    `<h2>OG Courses Demo</h2>
    <p>Try: <a href="/course/1">/course/1</a> or <a href="/course/2">/course/2</a></p>`
  );
});

app.get("/course/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) return res.status(404).send("Course not found");

  const url = absoluteUrl(req, id);
  res.render("course", { course, url });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});