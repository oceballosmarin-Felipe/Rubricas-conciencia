// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// 1. Módulo de Seguridad y Hashing SHA-256
async function generarHash(contrasena) {
  const encoder = new TextEncoder();
  const data = encoder.encode(contrasena);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 2. Manejo de Usuarios en localStorage (Simulando SQLite)
function obtenerUsuariosBD() {
  return JSON.parse(localStorage.getItem('pwa_usuarios') || '[]');
}

function guardarUsuariosBD(usuarios) {
  localStorage.setItem('pwa_usuarios', JSON.stringify(usuarios));
}

// Inicializar Administrador por defecto si no existen usuarios
async function inicializarBD() {
  let usuarios = obtenerUsuariosBD();
  if (usuarios.length === 0) {
    const defaultHash = await generarHash('Felipe2026.');
    usuarios.push({
      id: 1,
      usuario: 'adminoc',
      email: 'oceballosmarin@gmail.com',
      hashPassword: defaultHash,
      rol: 'admin'
    });
    guardarUsuariosBD(usuarios);
  }
}

// 3. Estado de Sesión Actual
let sesionActual = null;
let modoRegistro = false;

// 4. Elementos DOM
const formAuth = document.getElementById('formAuth');
const authTitle = document.getElementById('authTitle');
const groupEmail = document.getElementById('groupEmail');
const btnAuthSubmit = document.getElementById('btnAuthSubmit');
const btnToggleAuth = document.getElementById('btnToggleAuth');
const viewAuth = document.getElementById('view-auth');
const viewAdmin = document.getElementById('view-admin');
const viewEvaluation = document.getElementById('view-evaluation');
const userInfoHeader = document.getElementById('userInfoHeader');
const evalDocenteActivo = document.getElementById('evalDocenteActivo');

// Alternar entre Inicio de Sesión y Registro
btnToggleAuth.addEventListener('click', () => {
  modoRegistro = !modoRegistro;
  if (modoRegistro) {
    authTitle.textContent = "Registro de Nuevo Docente";
    groupEmail.classList.remove('hidden');
    btnAuthSubmit.textContent = "Registrar Cuenta";
    btnToggleAuth.textContent = "Ya tengo cuenta (Iniciar Sesión)";
  } else {
    authTitle.textContent = "Inicio de Sesión de Docente";
    groupEmail.classList.add('hidden');
    btnAuthSubmit.textContent = "Ingresar";
    btnToggleAuth.textContent = "Crear nueva cuenta";
  }
});

// Inicializar ocultando Email en Login por defecto
groupEmail.classList.add('hidden');

// Submit del Formulario de Autenticación
formAuth.addEventListener('submit', async (e) => {
  e.preventDefault();
  const usuarioInput = document.getElementById('authUsuario').value.trim();
  const emailInput = document.getElementById('authEmail').value.trim().toLowerCase();
  const passwordInput = document.getElementById('authPassword').value.trim();

  let usuarios = obtenerUsuariosBD();
  const hashInput = await generarHash(passwordInput);

  if (modoRegistro) {
    // Validar duplicados
    const existe = usuarios.some(u => u.usuario.toLowerCase() === usuarioInput.toLowerCase() || u.email.toLowerCase() === emailInput);
    if (existe) {
      alert("Error: El nombre de usuario o correo ya está registrado.");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      usuario: usuarioInput,
      email: emailInput,
      hashPassword: hashInput,
      rol: 'usuario'
    };
    usuarios.push(nuevoUsuario);
    guardarUsuariosBD(usuarios);
    alert("¡Registro exitoso! Ya puedes iniciar sesión.");
    btnToggleAuth.click();
    formAuth.reset();
  } else {
    // Iniciar Sesión
    const userMatch = usuarios.find(u => u.usuario.toLowerCase() === usuarioInput.toLowerCase() && u.hashPassword === hashInput);
    if (userMatch) {
      sesionActual = userMatch;
      iniciarSesionUI();
    } else {
      alert("Error: Usuario o contraseña incorrectos.");
    }
  }
});

function iniciarSesionUI() {
  viewAuth.classList.add('hidden');
  viewEvaluation.classList.remove('hidden');
  evalDocenteActivo.value = `${sesionActual.usuario} (${sesionActual.rol.toUpperCase()})`;

  userInfoHeader.innerHTML = `
    <span class="badge bg-light text-dark">${sesionActual.usuario} [${sesionActual.rol.toUpperCase()}]</span>
    <button class="btn btn-sm btn-outline-light" onclick="cerrarSesion()">Salir</button>
  `;

  if (sesionActual.rol === 'admin') {
    viewAdmin.classList.remove('hidden');
    cargarTablaAdmin();
  } else {
    viewAdmin.classList.add('hidden');
  }

  cargarHistorialEvaluaciones();
}

function cerrarSesion() {
  sesionActual = null;
  viewAuth.classList.remove('hidden');
  viewEvaluation.classList.add('hidden');
  viewAdmin.classList.add('hidden');
  userInfoHeader.innerHTML = '';
  formAuth.reset();
}

// 5. Funciones del Panel de Administración
function cargarTablaAdmin() {
  const usuarios = obtenerUsuariosBD();
  const tbody = document.getElementById('adminUserTableBody');
  tbody.innerHTML = '';

  usuarios.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${u.id}</td>
      <td><strong>${u.usuario}</strong></td>
      <td>${u.email}</td>
      <td><span class="badge ${u.rol === 'admin' ? 'bg-danger' : 'bg-secondary'}">${u.rol}</span></td>
      <td>
        ${u.usuario !== sesionActual.usuario ? `<button class="btn btn-sm btn-outline-danger" onclick="eliminarUsuario(${u.id})">Eliminar</button>` : '<em>Sesión Activa</em>'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function eliminarUsuario(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
    let usuarios = obtenerUsuariosBD().filter(u => u.id !== id);
    guardarUsuariosBD(usuarios);
    cargarTablaAdmin();
  }
}

// 6. Lógica de Evaluación de Rúbricas y Registro
document.getElementById('btnCalcular').addEventListener('click', () => {
  const estudiante = document.getElementById('evalEstudiante').value.trim();
  if (!estudiante) {
    alert("Por favor ingresa el nombre del estudiante evaluado.");
    return;
  }

  const c1 = parseFloat(document.getElementById('criterio1').value);
  const c2 = parseFloat(document.getElementById('criterio2').value);
  const c3 = parseFloat(document.getElementById('criterio3').value);

  // Cálculo ponderado
  const notaFinal = (c1 * 0.4) + (c2 * 0.3) + (c3 * 0.3);
  let estado = "";

  if (notaFinal >= 4.5) estado = "Excelente / Notable";
  else if (notaFinal >= 3.5) estado = "Satisfactorio / Alto";
  else if (notaFinal >= 3.0) estado = "Aceptable / Medio";
  else estado = "Requiere Profundización y Reflexión";

  document.getElementById('lblPuntaje').textContent = notaFinal.toFixed(2);
  document.getElementById('lblEstado').textContent = estado;
  document.getElementById('resultadoBox').classList.remove('hidden');

  // Guardar en Historial
  const capSelect = document.getElementById('selectCapitulo');
  const capituloTexto = capSelect.options[capSelect.selectedIndex].text;

  const registroEvaluacion = {
    fecha: new Date().toLocaleString(),
    docente: sesionActual.usuario,
    estudiante: estudiante,
    capitulo: capituloTexto,
    nota: notaFinal.toFixed(2)
  };

  let historial = JSON.parse(localStorage.getItem('pwa_evaluaciones') || '[]');
  historial.unshift(registroEvaluacion);
  localStorage.setItem('pwa_evaluaciones', JSON.stringify(historial));

  cargarHistorialEvaluaciones();
});

function cargarHistorialEvaluaciones() {
  const historial = JSON.parse(localStorage.getItem('pwa_evaluaciones') || '[]');
  const tbody = document.getElementById('tablaHistorialBody');
  tbody.innerHTML = '';

  if (historial.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No hay evaluaciones registradas aún.</td></tr>';
    return;
  }

  historial.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><small>${item.fecha}</small></td>
      <td><strong>${item.docente}</strong></td>
      <td>${item.estudiante}</td>
      <td><small>${item.capitulo}</small></td>
      <td><span class="badge bg-primary fs-6">${item.nota}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Inicialización
inicializarBD();