const {
    getAllSemesters,
    getSemesterById,
    createSemesterModel,
    updateSemesterModel,
    deleteSemesterModel
} = require("../models/semester.model");


const getSemesters = async (req, res) => {
    try {
        const semesters = await getAllSemesters();

        res.status(200).json(semesters);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la recuperation des semestres"
        });
    }
};


const getSemester = async (req, res) => {
    try {
        const id = req.params.id;

        const semester = await getSemesterById(id);

        if (!semester) {
            return res.status(404).json({
                message: "Ce semestre n'existe pas"
            });
        }

        res.status(200).json(semester);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la recuperation du semestre"
        });
    }
};


const createSemester = async (req, res) => {
    try {
        const { name, year } = req.body;

        if (!name || !year) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const semester = await createSemesterModel(name, year);

        res.status(201).json(semester);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la creation du semestre"
        });
    }
};


const updateSemester = async (req, res) => {
    try {
        const id = req.params.id;

        const { name, year } = req.body;

        if (!name || !year) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const semester = await updateSemesterModel(
            name,
            year,
            id
        );

        if (!semester) {
            return res.status(404).json({
                message: "Ce semestre n'existe pas"
            });
        }

        res.status(200).json({
            message: "Le semestre a ete modifie avec succes",
            semester: semester
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la modification du semestre"
        });
    }
};


const deleteSemester = async (req, res) => {
    try {
        const id = req.params.id;

        const semester = await deleteSemesterModel(id);

        if (!semester) {
            return res.status(404).json({
                message: "Ce semestre n'existe pas"
            });
        }

        res.status(200).json({
            message: "Le semestre a ete supprime avec succes"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la suppression du semestre"
        });
    }
};


module.exports = {
    getSemesters,
    getSemester,
    createSemester,
    updateSemester,
    deleteSemester
};