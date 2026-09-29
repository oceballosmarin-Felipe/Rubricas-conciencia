// Base de datos de Obras DNDA con sus capítulos y rúbricas correspondientes
const OBRAS_DNDA = [
    {
        id: "pc",
        titulo: "Pedagogía de la Conciencia: Educación Integral para el Ser y el Saber",
        capitulos: [
            {
                nombre: "Capítulo I: El Despertar del Ser y la Conciencia en el Aula",
                rubricas: [
                    "Rúbrica 1.1: Bitácora de Introspección y Autoconocimiento",
                    "Rúbrica 1.2: Matriz de Gestión de la Interioridad y Atención Plena"
                ]
            },
            {
                nombre: "Capítulo II: Integración del Saber Riguroso con la Dimensión Ética",
                rubricas: [
                    "Rúbrica 2.1: Análisis Crítico y Juicio Ético del Conocimiento",
                    "Rúbrica 2.2: Síntesis Conceptual Transformadora"
                ]
            }
        ]
    },
    {
        id: "pa",
        titulo: "Pedagogía del Asombro: Una Guía para la Innovación Educativa",
        capitulos: [
            {
                nombre: "Capítulo I: La Ecuación Cognitiva del Asombro e Indagación",
                rubricas: [
                    "Rúbrica 1.1: Indagación Insólita y Estímulo Preguntador",
                    "Rúbrica 1.2: Búsqueda Activa de Sentido en la Incertidumbre"
                ]
            }
        ]
    },
    {
        id: "dmd",
        titulo: "Despertando Mentes Digitales: Programación para Docentes, Niños y Jóvenes",
        capitulos: [
            {
                nombre: "Capítulo I: Pensamiento Computacional y Lógica Algorítmica",
                rubricas: [
                    "Rúbrica 1.1: Descomposición de Problemas y Pseudocódigo",
                    "Rúbrica 1.2: Diseño, Depuración y Creatividad en Algoritmos"
                ]
            }
        ]
    },
    {
        id: "pth",
        titulo: "La Pedagogía de la Trascendencia Humana: Un Enfoque Holográfico",
        capitulos: [
            {
                nombre: "Capítulo I: Los Cuatro Pilares Epistemológicos de la Trascendencia",
                rubricas: [
                    "Rúbrica 1.1: Evaluación de Intersubjetividad Socrática",
                    "Rúbrica 1.2: Proyecto de Evolución Consciente e Integralidad"
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const bookSelect = document.getElementById('bookSelect');
    const chapterSelect = document.getElementById('chapterSelect');
    const rubricSelect = document.getElementById('rubricSelect');
    const form = document.getElementById('rubric-form');
    const recordsBody = document.getElementById('records-body');
    const btnExport = document.getElementById('btn-export');

    // 1. Cargar Libros en el Select
    OBRAS_DNDA.forEach((obra, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = obra.titulo;
        bookSelect.appendChild(option);
    });

    // 2. Evento al cambiar de Libro -> Cargar Capítulos
    bookSelect.addEventListener('change', (e) => {
        const bookIndex = e.target.value;
        chapterSelect.innerHTML = '<option value="">-- Selecciona un capítulo --</option>';
        rubricSelect.innerHTML = '<option value="">-- Primero selecciona un capítulo --</option>';
        rubricSelect.disabled = true;

        if (bookIndex === "") {
            chapterSelect.disabled = true;
            return;
        }

        const selectedBook = OBRAS_DNDA[bookIndex];
        selectedBook.capitulos.forEach((cap, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = cap.nombre;
            chapterSelect.appendChild(option);
        });

        chapterSelect.disabled = false;
    });

    // 3. Evento al cambiar de Capítulo -> Cargar Rúbricas
    chapterSelect.addEventListener('change', (e) => {
        const bookIndex = bookSelect.value;
        const chapterIndex = e.target.value;
        rubricSelect.innerHTML = '<option value="">-- Selecciona una rúbrica --</option>';

        if (chapterIndex === "") {
            rubricSelect.disabled = true;
            return;
        }

        const selectedChapter = OBRAS_DNDA[bookIndex].capitulos[chapterIndex];
        selectedChapter.rubricas.forEach((rubrica) => {
            const option = document.createElement('option');
            option.value = rubrica;
            option.textContent = rubrica;
            rubricSelect.appendChild(option);
        });

        rubricSelect.disabled = false;
    });

    // 4. Guardar Evaluación
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const c1 = parseFloat(document.getElementById('criterion1').value);
        const c2 = parseFloat(document.getElementById('criterion2').value);
        const c3 = parseFloat(document.getElementById('criterion3').value);

        const finalScore = ((c1 * 0.40) + (c2 * 0.30) + (c3 * 0.30)).toFixed(2);

        const selectedBookObj = OBRAS_DNDA[bookSelect.value];
        const selectedCapObj = selectedBookObj.capitulos[chapterSelect.value];

        const record = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            evaluator: document.getElementById('evaluatorName').value,
            role: document.getElementById('evaluatorRole').value,
            student: document.getElementById('studentName').value,
            group: document.getElementById('studentGroup').value,
            book: selectedBookObj.titulo,
            chapter: selectedCapObj.nombre,
            rubric: rubricSelect.value,
            score: finalScore
        };

        saveRecord(record);
        form.reset();
        chapterSelect.disabled = true;
        rubricSelect.disabled = true;
        loadRecords();
    });

    function saveRecord(record) {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        records.push(record);
        localStorage.setItem('evaluations', JSON.stringify(records));
    }

    function loadRecords() {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        recordsBody.innerHTML = '';

        if (records.length === 0) {
            recordsBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No hay evaluaciones registradas.</td></tr>`;
            return;
        }

        records.forEach(rec => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${rec.date}</td>
                <td>${rec.student}</td>
                <td>${rec.book.substring(0, 30)}...</td>
                <td>${rec.chapter.split(':')[0]}</td>
                <td><strong>${rec.score} / 5.00</strong></td>
                <td><button class="btn-delete" onclick="deleteRecord(${rec.id})">Eliminar</button></td>
            `;
            recordsBody.appendChild(tr);
        });
    }

    window.deleteRecord = function(id) {
        let records = JSON.parse(localStorage.getItem('evaluations')) || [];
        records = records.filter(rec => rec.id !== id);
        localStorage.setItem('evaluations', JSON.stringify(records));
        loadRecords();
    };

    btnExport.addEventListener('click', () => {
        const records = JSON.parse(localStorage.getItem('evaluations')) || [];
        if (records.length === 0) {
            alert('No hay datos para exportar.');
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Fecha,Evaluador,Rol,Estudiante,Grado,Libro,Capitulo,Rubrica,Nota Final\n";

        records.forEach(r => {
            csvContent += `"${r.date}","${r.evaluator}","${r.role}","${r.student}","${r.group}","${r.book}","${r.chapter}","${r.rubric}","${r.score}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "evaluaciones_ecosistema_pedagogico.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    loadRecords();
});
