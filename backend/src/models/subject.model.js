const pool = require("../config/db");

const getAllSubjects = async () => {
    const result = await pool.query(
        "SELECT * FROM subject"
    );

    return result.rows;
};

const getSubjectById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM subject WHERE id_subject=$1",
        [id]
    );

    return result.rows[0];
}

const createSubjectModel = async (name, coefficient) => {
    const result = await pool.query(
        `INSERT INTO subject (name, coefficient)
        VALUES ($1, $2)
        RETURNING *
        `,
        [name, coefficient]
    );

    return result.rows[0];
}

const updateSubjectModel = async (name, coefficient, id) => {
    const result = await pool.query(
        `UPDATE subject
        SET name=$1,
            coefficient=$2
        WHERE id_subject=$3
        RETURNING *`,
        [name, coefficient, id]
    );

    return result.rows[0];
};

const deleteSubjectModel = async (id) => {
    const result = await pool.query(
        `DELETE FROM subject
        WHERE id_subject=$1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    getAllSubjects,
    getSubjectById,
    createSubjectModel,
    updateSubjectModel,
    deleteSubjectModel
};