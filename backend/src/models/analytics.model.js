const pool = require("../config/db")

const getGeneralAverage = async () => {
    const result = await pool.query(
        "SELECT AVG(value) FROM grade"
    );

    return result.rows;
}

const getAveragePerStudent = async () => {
    const result = await pool.query(
        `SELECT student.id_student,
                student.first_name,
                student.last_name,
                AVG(grade.value)
        FROM grade
        INNER JOIN student
        ON grade.id_student = student.id_student
        GROUP BY student.id_student,
                student.first_name,
                student.last_name;
        `
    );

    return result.rows;
}

// L'eleve ayant la plus faible moyenne
const getWorstStudentAverage = async () => {
    const result = await pool.query(
        `SELECT student.id_student,
                student.first_name,
                student.last_name,
                AVG(grade.value) AS moyenne
        FROM grade
        INNER JOIN student
        ON student.id_student = grade.id_student
        GROUP BY student.id_student,
                 student.first_name,
                 student.last_name
        ORDER BY moyenne ASC
        LIMIT 1
        `    
    );

    return result.rows[0];
}

// L'eleve ayant la meilleure moyenne
const getBestStudentAverage = async () => {
    const result = await pool.query(
        `SELECT student.id_student,
                student.first_name,
                student.last_name,
                AVG(grade.value) AS moyenne
        FROM grade
        INNER JOIN student
        ON student.id_student = grade.id_student
        GROUP BY student.id_student,
                 student.first_name,
                 student.last_name
        ORDER BY moyenne DESC
        LIMIT 1
        `    
    );

    return result.rows[0];
}

//const getAveragePerSemester 

module.exports = {
    getGeneralAverage,
    getAveragePerStudent,
    getWorstStudentAverage,
    getBestStudentAverage
}