const pool = require("../config/db");

const getAllGrades = async () => {
    const result = await pool.query(
        "SELECT * FROM grade"
    );

    return result.rows;
};

const getGradeById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM grade WHERE id_grade=$1",
        [id]
    )

    return result.rows[0];
};

const createGradeModel = async (value, id_student, id_subject, id_semester) => {
    const result = await pool.query(
        `INSERT INTO grade (value, id_student, id_subject, id_semester)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [value, id_student, id_subject, id_semester]
    );

    return result.rows[0];
};

const updateGradeModel = async (id_grade, value, id_student, id_subject, id_semester) => {
    const result = await pool.query(
        `UPDATE grade
        SET value=$1,
            id_student=$2,
            id_subject=$3,
            id_semester=$4
        WHERE id_grade=$5
        RETURNING *`,
        [value, id_student, id_subject, id_semester, id_grade]

    );

    return result.rows[0]
};

const deleteGradeModel = async (id) => {
    const result = await pool.query(
        `DELETE FROM grade
        WHERE id_grade=$1
        RETURNING *`,
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getAllGrades,
    getGradeById,
    createGradeModel,
    updateGradeModel,
    deleteGradeModel
}