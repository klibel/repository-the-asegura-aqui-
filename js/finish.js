const btnExit = document.querySelector('.exit_menu');
const btnMenu = document.querySelector('.menu');
const menuLateral = document.querySelector('.menu_lateral');
const btnContinue = document.querySelector('.btn_continue');
const msjAlert = document.querySelector('.msj_alert');
const checkbox = document.querySelector('#aceptarPoliticas');
const linSercio = document.querySelectorAll('.lin_sercio');
const overlayDiv = document.querySelector('#overlay');
const listPoliza = document.querySelector('#list_poliza');
const btnXoverlay = document.querySelector('#btnXoverlay');
const enlaces = document.querySelectorAll('.menu_lateral .nav-link');
const confir = document.querySelector('#confir');
const btnListo = document.querySelector('#btn_listo');

// Datos del cliente
let cliente = {
  typeCI: "V", // Valor inicial por defecto
  cedula: "",
  nombre: "",
  apellido: "",
  fecha: "",
  genero: "",
  estado: "",
  linea: "",
  telefono: "",
  email: ""
}

// Inputs del form 
const idenSelect = document.querySelector('#idenSelect');
const inputCedula = document.querySelector('#inputCedula');
const nameCompleto = document.querySelector('#nameCompleto');
const apellidoCompleto = document.querySelector('#apellidoCompleto');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const generoSelect = document.querySelector('#generoSelect');
const estadoCivilSelect = document.querySelector('#estadoCivilSelect');
const numberCelSelect = document.querySelector('#numberCelSelect');
const inpuTelefono = document.querySelector('#inpuTelefono');
const email = document.querySelector('#email');

document.addEventListener('DOMContentLoaded', () => {
  windowResponsibility();
});

btnListo.addEventListener('click', () => {
  window.location.href = 'index.html';
});

btnExit.addEventListener('click', () => {
  menuLateral.classList.add('hidden');
});

btnMenu.addEventListener('click', () => {
  menuLateral.classList.remove('hidden');
});

function windowResponsibility() {
  if (window.innerWidth > 768) {
    menuLateral.classList.add('hidden'); 
  }
}

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => { 
    menuLateral.classList.add('hidden');
  });
});

linSercio.forEach(boton => {
  boton.addEventListener('click', overlay);
});

btnXoverlay.addEventListener('click', () => {
  overlayDiv.classList.add('hidden');
  listPoliza.classList.add('hidden');
});

function overlay() {
  overlayDiv.classList.remove('hidden');
  listPoliza.classList.remove('hidden');
}

window.addEventListener('resize', windowResponsibility);

// Funciones de estilos para validación utilitaria
function marcarValido(elemento) {
  elemento.classList.remove('border-slate-200', 'border-red-500', 'focus:ring-green-400/50');
  elemento.classList.add('border-blue-500', 'focus:ring-blue-500/50');
}

function marcarInvalido(elemento) {
  elemento.classList.remove('border-slate-200', 'border-blue-500', 'focus:ring-green-400/50');
  elemento.classList.add('border-red-500', 'focus:ring-red-500/50');
}

// Validar inputs (eventos)
idenSelect.addEventListener('change', e => {
  if (e.target.value) {
    marcarValido(idenSelect);
    cliente.typeCI = e.target.value;
  } else {
    marcarInvalido(idenSelect);
    cliente.typeCI = "";
  }
});

inputCedula.addEventListener('input', e => {
  const regex = /^\d{7,8}$/;
  if (regex.test(e.target.value)) {
    marcarValido(inputCedula);
    cliente.cedula = e.target.value;
  } else {
    marcarInvalido(inputCedula);
    cliente.cedula = "";
  }
});

nameCompleto.addEventListener('input', e => {
  const regex = /^[a-zA-ZÁéíóúáÉÍÓÚñÑ\s]{3,25}$/;
  if (regex.test(e.target.value.trim())) {
    marcarValido(nameCompleto);
    cliente.nombre = e.target.value.trim();
  } else {
    marcarInvalido(nameCompleto);
    cliente.nombre = "";
  }
});

apellidoCompleto.addEventListener('input', e => {
  const regex = /^[a-zA-ZÁéíóúáÉÍÓÚñÑ\s]{3,25}$/;
  if (regex.test(e.target.value.trim())) {
    marcarValido(apellidoCompleto);
    cliente.apellido = e.target.value.trim();
  } else {
    marcarInvalido(apellidoCompleto);
    cliente.apellido = "";
  }
});

fechaNacimiento.addEventListener('change', e => {
  if (e.target.value) {
    marcarValido(fechaNacimiento);
    cliente.fecha = e.target.value;
  } else {
    marcarInvalido(fechaNacimiento);
    cliente.fecha = "";
  }
});

generoSelect.addEventListener('change', e => {
  if (e.target.value) {
    marcarValido(generoSelect);
    cliente.genero = e.target.value;
  } else {
    marcarInvalido(generoSelect);
    cliente.genero = "";
  }
});

estadoCivilSelect.addEventListener('change', e => {
  if (e.target.value) {
    marcarValido(estadoCivilSelect);
    cliente.estado = e.target.value;
  } else {
    marcarInvalido(estadoCivilSelect);
    cliente.estado = "";
  }
});

numberCelSelect.addEventListener('change', e => {
  if (e.target.value) {
    marcarValido(numberCelSelect);
    cliente.linea = e.target.value;
  } else {
    marcarInvalido(numberCelSelect);
    cliente.linea = "";
  }
});

inpuTelefono.addEventListener('input', e => {
  const regex = /^\d{7}$/;
  if (regex.test(e.target.value)) {
    marcarValido(inpuTelefono);
    cliente.telefono = e.target.value;
  } else {
    marcarInvalido(inpuTelefono);
    cliente.telefono = "";
  }
});

email.addEventListener('input', e => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(e.target.value)) {
    marcarValido(email);
    cliente.email = e.target.value;
  } else {
    marcarInvalido(email);
    cliente.email = "";
  }
});

// Validar todo el formulario
btnContinue.addEventListener('click', () => {
  if (!checkbox.checked) {
    msjAlert.innerHTML = `<p class="text-red-500 font-medium">Debes aceptar las políticas de seguridad para continuar</p>`;
  } else {
    msjAlert.innerHTML = ``;
    validarInfo();
  }
});

function validarInfo() {
  const { typeCI, cedula, nombre, apellido, fecha, genero, estado, linea, telefono, email } = cliente;
  const datosCar = JSON.parse(localStorage.getItem('DatosCar'));
  
  if (typeCI && cedula && nombre && apellido && fecha && genero && estado && linea && telefono && email) {
    generarPDF(cliente, datosCar);
  } else {
    msjAlert.innerHTML = `<p class="text-red-500 font-medium">Completa todos los campos de manera correcta</p>`;
  }
}

function listo() {
  overlayDiv.classList.remove('hidden');
  confir.classList.remove('hidden');
}

// Generando el documento del cliente
async function generarPDF(cliente, carro) {
  const { typeCI, cedula, nombre, apellido, fecha, genero, estado, linea, telefono, email } = cliente;
  const { car, marca, year } = carro || { car: 'N/A', marca: 'N/A', year: 'N/A' };
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const anchoPDF = doc.internal.pageSize.getWidth();

  // Título
  const titulo = `¡Asegura Aqui!`;
  const posicionTitulo = (anchoPDF / 2) - (doc.getTextWidth(titulo) / 2);
  doc.setFontSize(16);
  doc.text(titulo, posicionTitulo, 20); 

  doc.setFontSize(20);
  const mensaje = "Póliza de seguro automotriz.";
  const posicionX = (anchoPDF / 2) - (doc.getTextWidth(mensaje) / 2);
  doc.text(mensaje, posicionX, 30); 

  doc.setFontSize(8);
  doc.text("Muchas gracias por haber elegido a Asegura Aqui! para asegurar tu auto y poder confiar en nosotros.", 10, 40);
  doc.text("A continuación, te presentamos las coberturas incluidas en tu póliza:", 10, 50);
  doc.text("1. Responsabilidad Civil: Esta cobertura es esencial y protege al asegurado en caso de causar daños a terceros.", 10, 60);
  doc.text("2. Cobertura de Daños Propios: Cubre los daños a tu propio vehículo en caso de accidente, independientemente de quién tenga la culpa.", 10, 70);
  doc.text("3. Robo y Hurto: Protege tu vehículo contra robos y hurtos. Si tu auto es robado, recibirás una compensación económica.", 10, 80);
  doc.text("4. Incendio: Cubre los daños que pueda sufrir tu auto por incendios, ya sea por causas accidentales o intencionadas.", 10, 90);
  doc.text("5. Asistencia en Carretera: Incluye servicios como grúas, cambio de llantas y asistencia mecánica.", 10, 100);
  doc.text("6. Cobertura de Cristales: Protege los cristales de tu auto en caso de rotura o daño.", 10, 110);
  doc.text("7. Lesiones Personales: Ayuda a pagar los gastos médicos para ti y tus pasajeros en caso de un accidente.", 10, 120);
  doc.text("8. Cobertura de Accidentes Personales: Proporciona compensación en caso de lesiones graves o fallecimiento en un accidente.", 10, 130);
  doc.text("9. Descuentos por Buen Conductor: Descuentos si no has tenido accidentes o reclamaciones en un período determinado.", 10, 140);
  doc.text("10. Opciones de Pago Flexibles: Diferentes planes de pago para facilitar la gestión de tus finanzas.", 10, 150);

  // Sección de Datos del Cliente
  doc.setFontSize(10);
  doc.text("Datos del Cliente", 10, 170);
  doc.setFontSize(8);
  doc.text(`Cédula: ${typeCI} - ${cedula}`, 10, 180);
  doc.text(`Nombre: ${nombre}`, 10, 190);
  doc.text(`Apellido: ${apellido}`, 10, 200);
  doc.text(`Fecha de Nacimiento: ${fecha}`, 10, 210);
  doc.text(`Género: ${genero}`, 10, 220);
  doc.text(`E-mail: ${email}`, 10, 230);
  doc.text(`Teléfono: ${linea}-${telefono}`, 10, 240);
  doc.text(`Estado Civil: ${estado}`, 10, 250);

  // Sección de Datos del Vehículo
  const posicionDerechaX = anchoPDF - 100; 
  doc.setFontSize(10);
  doc.text(`Datos del Vehículo`, posicionDerechaX, 170);
  doc.setFontSize(8);
  doc.text(`Marca: ${marca}`, posicionDerechaX, 180);
  doc.text(`Modelo: ${car}`, posicionDerechaX, 190);
  doc.text(`Año: ${year}`, posicionDerechaX, 200);

  // Descargar el PDF
  doc.save(`Poliza_de_seguro_automotriz_${car}_${marca}.pdf`);
  listo();
}





