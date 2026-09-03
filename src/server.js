const express = require("express");

const app = express();

const studentRouter = require("./routes/student.routes");

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