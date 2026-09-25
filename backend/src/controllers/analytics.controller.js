const {
    getGeneralAverage,
    getAveragePerStudent,
    getBestStudentAverage,
    getWorstStudentAverage
} = require("../models/analytics.model");

const getGeneralAverageAPI = async (req, res) => {
    try {
        const avg = await getGeneralAverage();
        res.status(200).json(avg);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur"
        });
    }   
    
};

const getAveragePerStudentAPI = async (req, res) => {
    try {
        const avg = await getAveragePerStudent();
        res.status(200).json(avg);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Erreur"
        });
    }   
    
};

const getBestStudentAverageAPI = async (req, res) => {
    try {
        const avg = await getBestStudentAverage();
        res.status(200).json(avg);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error"
        });
    }
};

const getWorstStudentAverageAPI = async (req, res) => {
    try {
        const avg = await getWorstStudentAverage();
        res.status(200).json(avg);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error"
        });
    }
}

module.exports = {
    getGeneralAverageAPI,
    getAveragePerStudentAPI,
    getBestStudentAverageAPI,
    getWorstStudentAverageAPI
}