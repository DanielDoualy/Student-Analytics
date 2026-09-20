const {
    getAllSubjects,
    getSubjectById,
    createSubjectModel,
    updateSubjectModel,
    deleteSubjectModel
} = require("../models/subject.model");

const getSubjects = async (req, res) => {
    try {
        const subjects = await getAllSubjects();
        res.json(subjects);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur lors de la recuperation des matieres"
        });
    }
};

const getSubject = async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await getSubjectById(id);

        if (!subject) {
            return res.status(404).json({
                message: "Cet etudiant n'existe pas"
            });
        }

        res.json(subject);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur"
        });
    }
};

const createSubject = async (req, res) => {
    try {
        const {name, coefficient} = req.body;

        if ((coefficient <= 0) || (!name || !coefficient)) {
            res.status(400).json({
                message: "Veuillez entrer des valeurs valides"
            })
        }

        const subject = await createSubjectModel(name, coefficient);

        res.status(201).json(subject);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur"
        });
    }
}

const updateSubject = async (req, res) => {
    try {
        const id = req.params.id;

        const {name, coefficient} = req.body;
        const subject = await updateSubjectModel(name, coefficient, id);

        if (!subject) {
            res.status(400).json({
                message: "Cette matiere n'existe pas !"
            })
        }

        res.status(200).json(subject)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur"
        });
    }
}

const deleteSubject = async (req, res) => {
    try {
        const id = req.params.id;

        const subject = await deleteSubjectModel(id);

        if (!subject) {
            return res.status(404).json({
                message: "Cette matiere n'existe pas"
            });
        }

        res.status(200).json({
            message: "La matiere a été supprimé avec succès"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur lors de la suppression de la matiere"
        });
    }
};

module.exports = {
    getSubjects,
    getSubject,
    createSubject,
    updateSubject,
    deleteSubject
};