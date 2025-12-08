const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/student_api")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB Connection error:", err));

const studentRoutes = require("./routes/students");
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h1>Simple Node.js REST API for managing students</h1>
<p> <b>GET</b> /api/students — list all students  </p>
<p> <b>GET</b> /api/students/:id — get a student by id </p>
<p> <b>POST</b> api/students — create a student (JSON body) </p>
<p> <b>PUT</b> api/students/:id — update a student </p>
<p> <b>DELETE</b> api/students/:id — delete a student <p>`);
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});




