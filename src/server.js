const express = require("express");

const app = express();

const studentRouter = require("./routes/student.routes");
const subjectRouter = require("./routes/subject.routes");
const semesterRouter = require("./routes/semester.routes");
const gradeRouter = require("./routes/grade.routes");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student Analytics API"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use("/api/students", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/semester", semesterRouter);
app.use("/api/grade", gradeRouter)