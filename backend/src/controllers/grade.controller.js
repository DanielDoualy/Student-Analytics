const {
    getAllGrades,
    getGradeById,
    createGradeModel,
    updateGradeModel,
    deleteGradeModel,
} = require("../models/grade.model");

const getGrades = async (req, res) => {
    try {
        const grades = await getAllGrades();

        res.json(grades);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Une erreur s'est produite"
        });
    }
};

const getGrade = async (req, res) => {
    try {
        const id = req.params.id;

        const grade = await getGradeById(id);

        if(!grade) {
            return res.status(404).json({
                message: "Ce grade n'existe pas"
            });
        }

        res.status(200).json(grade);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Une Erreur s'est produite"
        });
    }
}

const createGrade = async (req, res) => {
    try {
        const {
            value,
            id_student,
            id_subject,
            id_semester
        } = req.body;

        if (!value || !id_student || !id_subject || !id_semester) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const grade = await createGradeModel(
            value,
            id_student,
            id_subject,
            id_semester
        );

        res.status(201).json(grade);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la creation du grade"
        });
    }
};

const updateGrade = async (req, res) => {
    try {
        const id_grade = req.params.id;

        const {
            value,
            id_student,
            id_subject,
            id_semester
        } = req.body;

        if (!value || !id_student || !id_subject || !id_semester) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const grade = await updateGradeModel(
            id_grade,
            value,
            id_student,
            id_subject,
            id_semester
        );

        if (!grade) {
            return res.status(404).json({
                message: "Ce grade n'existe pas"
            });
        }

        res.status(200).json({
            message: "Le grade a ete modifie avec succes",
            grade: grade
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la modification du grade"
        });
    }
};

const deleteGrade = async (req, res) => {
    try {
        const id = req.params.id;

        const grade = await deleteGradeModel(id);

        if (!grade) {
            return res.status(404).json({
                message: "Ce grade n'existe pas"
            });
        }

        res.status(200).json({
            message: "Le grade a ete supprime avec succes"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la suppression du grade"
        });
    }
};

module.exports = {
    getGrades,
    getGrade,
    createGrade,
    updateGrade,
    deleteGrade
}