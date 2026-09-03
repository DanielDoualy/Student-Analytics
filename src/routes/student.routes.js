const express = require("express");

const { getStudents, getStudent } = require("../controllers/student.controller");

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);

module.exports = router;