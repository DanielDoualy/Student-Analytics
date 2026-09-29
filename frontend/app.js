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

        const ul = document.querySelector("#list");

        data.forEach(student => {
            const li = document.createElement("li");

            li.textContent =
                `${student.first_name} ${student.last_name} - ${student.avg}`;

            ul.appendChild(li);
        });

    } catch (error) {
        console.error(error);
    }
};

getAveragePerStudent();