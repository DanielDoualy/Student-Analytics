const getGeneralAverage = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/general-average"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        console.log(data);

        document.querySelector("#general-average").textContent = data[0].avg;

    } catch (error) {
        console.error(error);
    }
};

getGeneralAverage();

const getBestStudent = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/best-student"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        console.log(data);

        document.querySelector("#best-student").textContent =
            `${data.first_name} ${data.last_name} - ${data.moyenne}`;
            
    } catch (error) {
        console.error(error);
    }
};

getBestStudent();

const getWorstStudent = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/worst-student"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        console.log(data);

        document.querySelector("#worst-student").textContent =
            `${data.first_name} ${data.last_name} - ${data.moyenne}`;
            
    } catch (error) {
        console.error(error);
    }
};

getWorstStudent();

const getAveragePerStudent = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/student"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        console.log(data);

        const table = document.querySelector("#students-table");

        data.forEach(student => {

            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = student.id_student;

            const lastNameCell = document.createElement("td");
            lastNameCell.textContent = student.last_name;

            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = student.first_name;

            const averageCell = document.createElement("td");
            averageCell.textContent = Number(student.avg).toFixed(2);

            const statusCell = document.createElement("td");

            if (Number(student.avg) >= 10) {
                statusCell.textContent = "Validé";
                statusCell.classList.add("status", "success");
            } else {
                statusCell.textContent = "Échec";
                statusCell.classList.add("status", "danger");
            }

            row.appendChild(idCell);
            row.appendChild(lastNameCell);
            row.appendChild(firstNameCell);
            row.appendChild(averageCell);
            row.appendChild(statusCell);

            table.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
};

getAveragePerStudent();

// ============================================================
// GRAPHIQUE 1 — MOYENNE PAR ÉTUDIANT
// ============================================================

const getStudentsChart = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/student"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        const labels = data.map(student =>
            `${student.first_name} ${student.last_name}`
        );

        const averages = data.map(student =>
            Number(student.avg)
        );

        const canvas = document.querySelector("#students-chart");

        new Chart(canvas, {
            type: "bar",

            data: {
                labels: labels,

                datasets: [
                    {
                        label: "Moyenne",
                        data: averages
                    }
                ]
            },

            options: {
                responsive: true,

                scales: {
                    y: {
                        beginAtZero: true,
                        max: 20
                    }
                }
            }
        });

    } catch (error) {
        console.error("Erreur graphique étudiants :", error);
    }
};


// ============================================================
// GRAPHIQUE 2 — MOYENNE PAR MATIÈRE
// ============================================================

const getSubjectsChart = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/subject"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        const labels = data.map(subject =>
            subject.subject
        );

        const averages = data.map(subject =>
            Number(subject.moyenne)
        );

        const canvas = document.querySelector("#subjects-chart");

        new Chart(canvas, {
            type: "bar",

            data: {
                labels: labels,

                datasets: [
                    {
                        label: "Moyenne",
                        data: averages
                    }
                ]
            },

            options: {
                responsive: true,

                scales: {
                    y: {
                        beginAtZero: true,
                        max: 20
                    }
                }
            }
        });

    } catch (error) {
        console.error("Erreur graphique matières :", error);
    }
};


// ============================================================
// GRAPHIQUE 3 — MOYENNE PAR SEMESTRE
// ============================================================

const getSemestersChart = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/analytics/semester"
        );

        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        const data = await response.json();

        const labels = data.map(semester =>
            semester.semester
        );

        const averages = data.map(semester =>
            Number(semester.moyenne)
        );

        const canvas = document.querySelector("#semesters-chart");

        new Chart(canvas, {
            type: "line",

            data: {
                labels: labels,

                datasets: [
                    {
                        label: "Moyenne",
                        data: averages,

                        tension: 0.3
                    }
                ]
            },

            options: {
                responsive: true,

                scales: {
                    y: {
                        beginAtZero: true,
                        max: 20
                    }
                }
            }
        });

    } catch (error) {
        console.error("Erreur graphique semestres :", error);
    }
};


// ============================================================
// LANCEMENT DES GRAPHIQUES
// ============================================================

getStudentsChart();
getSubjectsChart();
getSemestersChart();
