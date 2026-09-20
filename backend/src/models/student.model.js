const pool = require("../config/db");

const getAllStudents = async () => {
    const result = await pool.query(
        "SELECT * FROM student"
    );

    return result.rows;
};

const getStudentById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM student WHERE id_student=$1",
        [id]
    );

    return result.rows[0];
};

const createStudentModel = async (firstName, lastName, email) => {
    const result = await pool.query(
        `INSERT INTO student (first_name, last_name, email)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [firstName, lastName, email]
    );

    return result.rows[0];
};

const updateStudentModel = async (firstName, lastName, email, id) => {
    const result = await pool.query(
        `UPDATE student
        SET first_name=$1,
            last_name=$2,
            email=$3
        WHERE id_student=$4
        RETURNING *`,
        [firstName, lastName, email, id]
    );

    return result.rows[0];
};

const deleteStudentModel = async (id) => {
    const result = await pool.query(
        `DELETE FROM student
        WHERE id_student=$1
        RETURNING *`,
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudentModel,
    updateStudentModel,
    deleteStudentModel
};