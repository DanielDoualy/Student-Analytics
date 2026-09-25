const express = require("express");

const {
    getGeneralAverageAPI,
    getAveragePerStudentAPI,
    getBestStudentAverageAPI,
    getWorstStudentAverageAPI
} = require("../controllers/analytics.controller");

const router = express.Router();

router.get("/general-average", getGeneralAverageAPI);
router.get("/student", getAveragePerStudentAPI);
router.get("/best-student", getBestStudentAverageAPI);
router.get("/worst-student", getWorstStudentAverageAPI)

module.exports = router;