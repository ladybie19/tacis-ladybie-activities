const students = [
    { name: "Ana", scores: [85, 90, 88], present: true },
    { name: "Ben", scores: [70, 75, 72], present: false },
    { name: "Cara", scores: [95, 92, 94], present: true },
    { name: "Daniel", scores: [60, 65, 70], present: true },
    { name: "Ella", scores: [88, 85, 90], present: true },
    { name: "Felix", scores: [78, 80, 82], present: false }
];

const tableBody = document.getElementById("tableBody");

function getAverage(scores) {
    return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
}

function renderTable(data) {
    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    No records to display
                </td>
            </tr>
        `;
        return;
    }

    data.forEach(student => {
        const avg = getAverage(student.scores);
        const passed = avg >= 75;

        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.scores[0]}</td>
                <td>${student.scores[1]}</td>
                <td>${student.scores[2]}</td>
                <td>${avg}</td>
                <td class="${passed ? 'pass' : 'fail'}">
                    ${passed ? 'Passed' : 'Failed'}
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

function filterStudents(type) {
    let filtered = [];

    switch(type) {
        case "present":
            filtered = students.filter(s => s.present);
            break;
        case "absent":
            filtered = students.filter(s => !s.present);
            break;
        case "passed":
            filtered = students.filter(s => getAverage(s.scores) >= 75);
            break;
        case "failed":
            filtered = students.filter(s => getAverage(s.scores) < 75);
            break;
        default:
            filtered = students;
    }

    renderTable(filtered);
}

function searchStudent() {
    const value = document.getElementById("searchInput").value.toLowerCase().trim();
    const filtered = students.filter(s => 
        s.name.toLowerCase().includes(value)
    );
    renderTable(filtered);
}

renderTable(students);