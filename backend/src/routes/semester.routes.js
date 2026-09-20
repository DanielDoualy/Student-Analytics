const express = require("express");

const {
    getSemesters,
    getSemester,
    createSemester,
    updateSemester,
    deleteSemester
} = require("../controllers/semester.controller");

const router = express.Router();

router.get("/", getSemesters);
router.get("/:id", getSemester);
router.post("/", createSemester);
router.put("/:id", updateSemester);
router.delete("/:id", deleteSemester);

module.exports = router;