const express = require("express");
const router = express.Router();

const {getSubjects,
    getSubject,
    createSubject,
    updateSubject,
    deleteSubject
} = require("../controllers/subject.controller");

router.get("/", getSubjects);
router.get("/:id", getSubject);
router.post("/", createSubject);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject)

module.exports = router;