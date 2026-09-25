const express = require("express");

const {
    getGeneralAverageAPI,
    getAveragePerStudentAPI,
    getBestStudentAverageAPI,
    getWorstStudentAverageAPI
} = require("../controllers/analytics.controller");

const router = express.Router();

router.get("/", getGeneralAverageAPI);
router.get("/average", getAveragePerStudentAPI);
router.get("/best", getBestStudentAverageAPI);
router.get("/worst", getWorstStudentAverageAPI)

module.exports = router;