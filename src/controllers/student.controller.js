const { getAllStudents,
    getStudentById,
    createStudentModel,
    updateStudentModel,
    deleteStudentModel
} = require('../models/student.model');

const getStudents = async (req, res) => {

    try {
        const students = await getAllStudents();
        res.json(students);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur lors de la récupération des étudiants"
        });
    }
};

const getStudent = async (req, res) => {

    try {

        const id = req.params.id;

        const student = await getStudentById(id);

        if (!student) {
            return res.status(404).json({
                message: "Etudiant non trouvé"
            });
        }

        res.json(student);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la récupération de l'etudiant"
        });

    }
};

const createStudent = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const student = await createStudentModel(
            firstName,
            lastName,
            email
        );

        res.status(201).json(student);    

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la création de l'étudiant"
        });
    }
};

const updateStudent = async (req, res) => {

    try {
        const id = req.params.id;

        const { firstName, lastName, email } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({
                message: "Veuillez entrer toutes les informations"
            });
        }

        const student = await updateStudentModel(
            firstName,
            lastName,
            email,
            id
        );

        if (!student) {
            return res.status(404).json({
                message: "Cet étudiant n'existe pas"
            });
        }

        res.status(200).json({
            message: "L'étudiant a été modifié avec succès",
            student: student
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la modification de l'étudiant"
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;

        const student = await deleteStudentModel(id);

        if (!student) {
            return res.status(404).json({
                message: "Cet étudiant n'existe pas"
            });
        }

        res.status(200).json({
            message: "L'étudiant a été supprimé avec succès"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Erreur lors de la suppression de l'étudiant"
        });
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
};