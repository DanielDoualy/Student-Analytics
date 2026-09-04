const pool = require("../config/db");

const getAllSemesters = async () => {
    const result = await pool.query(
        "SELECT * FROM semester"
    );

    return result.rows;
};

const getSemesterById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM semester WHERE id_semester=$1",
        [id]
    );

    return result.rows[0];
};

const createSemesterModel = async (name, year) => {
    const result = await pool.query(
        `INSERT INTO semester (name, year)
        VALUES ($1, $2)
        RETURNING *`,
        [name, year]
    );

    return result.rows[0];
};

const updateSemesterModel = async (name, year, id) => {
    const result = await pool.query(
        `UPDATE semester
        SET name=$1,
            year=$2
        WHERE id_semester=$3
        RETURNING *`,
        [name, year, id]
    );

    return result.rows[0];
};

const deleteSemesterModel = async (id) => {
    const result = await pool.query(
        `DELETE FROM semester
        WHERE id_semester=$1
        RETURNING *`,
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getAllSemesters,
    getSemesterById,
    createSemesterModel,
    updateSemesterModel,
    deleteSemesterModel
};