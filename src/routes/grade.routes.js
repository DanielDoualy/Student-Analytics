const express = require("express");

const {
    getGrades,
    getGrade,
    createGrade,
    updateGrade,
    deleteGrade
} = require("../controllers/grade.controller");

const router = express.Router();

router.get("/", getGrades);
router.get("/:id", getGrade);
router.post("/", createGrade);
router.put("/:id", updateGrade);
router.delete("/:id", deleteGrade);

module.exports = router;

