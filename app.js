document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rubric-form');
    const recordsBody = document.getElementById('records-body');
    const btnExport = document.getElementById('btn-export');

    // Cargar datos al iniciar
    loadRecords();

    // Guardar evaluación
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const c1 = parseFloat(document.getElementById('criterion1').value);
        const c2 = parseFloat(document.getElementById('criterion2').value);
        const c3 = parseFloat(document.getElementById('criterion3').value);

        // Cálculo con ponderaciones: 40%, 30%, 30%
        const finalScore = ((c1 * 0.40) + (c2 * 0.30) + (c3 * 0.30)).toFixed(2);

        const record = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            evaluator: document.getElementById('evaluatorName').value,
            role: document.getElementById('evaluatorRole').value,
            student: document.getElementById('studentName').value,
            group: document.getElementById('studentGroup').value,
            chapter: document.getElementById('chapterSelect').value,
            rubric: document.getElementById('rubricSelect').value,
            score: finalScore
        };

        saveRecord(record);
        form.reset();
        loadRecords();
    });

    // Guardar en localStorage
    function saveRecord(record) {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        records.push(record);
        localStorage.setItem('evaluations', JSON.stringify(records));
    }

    // Mostrar registros en la tabla
    function loadRecords() {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        recordsBody.innerHTML = '';

        if (records.length === 0) {
            recordsBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No hay evaluaciones registradas en este dispositivo.</td></tr>`;
            return;
        }

        records.forEach(rec => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${rec.date}</td>
                <td>${rec.student}</td>
                <td>${rec.group}</td>
                <td>${rec.chapter}</td>
                <td><strong>${rec.score} / 5.00</strong></td>
                <td><button class="btn-delete" onclick="deleteRecord(${rec.id})">Eliminar</button></td>
            `;
            recordsBody.appendChild(tr);
        });
    }

    // Eliminar registro
    window.deleteRecord = function(id) {
        let records = JSON.parse(localStorage.getItem('evaluations')) || [];
        records = records.filter(rec => rec.id !== id);
        localStorage.setItem('evaluations', JSON.stringify(records));
        loadRecords();
    };

    // Exportar a CSV
    btnExport.addEventListener('click', () => {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        if (records.length === 0) {
            alert('No hay datos para exportar.');
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Fecha,Evaluador,Rol,Estudiante,Grado,Capitulo,Rubrica,Nota Final\n";

        records.forEach(r => {
            csvContent += `"${r.date}","${r.evaluator}","${r.role}","${r.student}","${r.group}","${r.chapter}","${r.rubric}","${r.score}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "evaluaciones_pedagogia_conciencia.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});