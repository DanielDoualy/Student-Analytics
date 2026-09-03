const { getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
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

module.exports = {
    getStudents,
    getStudent
}