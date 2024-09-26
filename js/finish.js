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
const enlaces = document.querySelectorAll('.list_menu .lin')
const confir = document.querySelector('#confir');
const btnListo = document.querySelector('#btn_listo');

// datos del cliente
let cliente = {
  typeCI: "",
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
//

//inputs del form 
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
//

document.addEventListener('DOMContentLoaded', (e) => {
  windowResponsibility();
});

btnListo.addEventListener('click', e => {
  window.location.href = 'index.html'
})

btnExit.addEventListener('click', e => {
  menuLateral.style.display = "none";
});

btnMenu.addEventListener('click', e => {
  menuLateral.style.display = "flex";
});

function windowResponsibility() {
  if (window.innerWidth > 800) {
    menuLateral.style.display = "none"; 
  }
}

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(event) { 
    menuLateral.style.display ="none"
  });
});

linSercio.forEach(boton => {
  boton.addEventListener('click', overlay);
});

btnXoverlay.addEventListener('click', e => {
  overlayDiv.style.display = 'none';
  listPoliza.style.display = 'none'
})

function overlay(){
  if (overlayDiv.classList.contains('hidden')|| listPoliza.classList.contains('hidden')) {
    overlayDiv.style.display = 'flex';
    listPoliza.style.display = 'flex';
  }
}

window.addEventListener('resize', windowResponsibility);

// validar inputs (eventos)

idenSelect.addEventListener('change', e => {
  const iden = e.target.value
  validarIdent(iden);
});

inputCedula.addEventListener('keyup', e => {
  const cedula = e.target.value
  validarNumIdent(cedula);
});

nameCompleto.addEventListener('keyup', e => {
  const nombre = e.target.value 
  validarName(nombre);
});

apellidoCompleto.addEventListener('keyup', e => {
  const apellido = e.target.value 
  validarApellido(apellido);
});

fechaNacimiento.addEventListener('change', e => {
  const fecha = e.target.value
  validarFechaNaci(fecha);
});

generoSelect.addEventListener('change', e => {
  const genero = e.target.value
  validarGenero(genero);
});

estadoCivilSelect.addEventListener('change', e => {
  const civilEstado = e.target.value
  validarEstadoCivil(civilEstado);
});

numberCelSelect.addEventListener('change', e => {
  const celSelet = e.target.value
  validarLineaTelefono(celSelet);
});

inpuTelefono.addEventListener('keyup', e => {
  const telefono = e.target.value
  validarNumeroTelefono(telefono);
});

email.addEventListener('keyup', e => {
  const Email = e.target.value
  validarEmail(Email);
});

// funciono que chequea si se valida

function validarIdent(selectCedula) {
  if (selectCedula) {
    idenSelect.style.border = 'solid 2px blue';
    cliente.typeCI = selectCedula;
  } else {
    idenSelect.style.border = 'solid 2px red';
  }
}

function validarNumIdent(cedula) {
  const regex = /^\d{7,8}$/;
  if (regex.test(cedula)) {
    inputCedula.style.border = 'solid 2px blue';
    cliente.cedula = cedula;
  } else {
    inputCedula.style.border = 'solid 2px red';
  }
}

function validarName(nombre) {
  const regex = /^[a-zA-Z]{3,10} [a-zA-Z]{3,10}$/
  if (regex.test(nombre)) {
    nameCompleto.style.border = 'solid 2px blue';
    cliente.nombre = nombre;
  } else {
    nameCompleto.style.border = 'solid 2px red';
  }
}

function validarApellido(apellido) {
  const regex = /^[a-zA-Z]{3,10} [a-zA-Z]{3,10}$/
  if (regex.test(apellido)) {
    apellidoCompleto.style.border = 'solid 2px blue';
    cliente.apellido = apellido;
  } else {
    apellidoCompleto.style.border = 'solid 2px red';
  }
}

function validarFechaNaci(fecha) {
  const regex = /^(19[789][0-9]|200[0-6])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (regex.test(fecha)) {
    fechaNacimiento.style.border = 'solid 2px blue';
    cliente.fecha = fecha;
  } else {
    fechaNacimiento.style.border = 'solid 2px red';
  }
}

function validarGenero(genero) {
  if (genero) {
    generoSelect.style.border = 'solid 2px blue';
    cliente.genero = genero;
  } else {
    generoSelect.style.border = 'solid 2px red';
  }
}

function validarEstadoCivil(estado) {
  if (estado) {
    estadoCivilSelect.style.border = 'solid 2px blue';
    cliente.estado = estado;
  } else {
    estadoCivilSelect.style.border = 'solid 2px red';
  }
}

function validarLineaTelefono(linea) {
  if (linea) {
    numberCelSelect.style.border = 'solid 2px blue';
    cliente.linea = linea;
  } else {
    numberCelSelect.style.border = 'solid 2px red';
  }
}

function validarNumeroTelefono(telefono) {
  const regex = /^\d{7}$/;
  if (regex.test(telefono)) {
    inpuTelefono.style.border = 'solid 2px blue';
    cliente.telefono = telefono;
  } else {
    inpuTelefono.style.border = 'solid 2px red';
  }
}

function validarEmail(Email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(Email)) {
    email.style.border = 'solid 2px blue';
    cliente.email = Email;
  } else {
    email.style.border = 'solid 2px red';
  }
}

// validar todo el formulario

btnContinue.addEventListener('click', e => {
  if (!checkbox.checked) {
    msjAlert.innerHTML = `<p class="text-red-500">Debes aceptar las políticas de seguridad para continuar</p>`;
  } else {
    msjAlert.innerHTML = ``;
    validarInfo();
  }
})

function validarInfo(){
  const {typeCI, cedula, nombre, apellido, fecha, genero, estado, linea, telefono, email} = cliente;
  const datosCar = JSON.parse(localStorage.getItem('DatosCar'));
  if (typeCI && cedula && nombre && apellido && fecha && genero && estado && linea && telefono && email) {
    generarPDF(cliente, datosCar);
  } else {
    msjAlert.innerHTML = `<p class="text-red-500">Completa todos los campos de manera correcta</p>`;
  }
}

function listo() {
  if (overlayDiv.classList.contains('hidden')) {
    overlayDiv.style.display = 'flex';
    confir.style.display = 'flex';
  }
}

// generando el documento del ciente 

async function generarPDF(cliente, carro) {
  const {typeCI, cedula, nombre, apellido, fecha, genero, estado, linea, telefono, email} = cliente;
  const {car, marca, year} = carro;
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
  doc.text("Muchas gracias por haber elegido a Asegura Aqui!.com para asegurar tu auto y poder confiar en nosotros.", 10, 40);
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

//   // Código de Solicitud
//   doc.setFontSize(10);
//  const msj = ``;
//   const msjFinal = (anchoPDF / 2) - (doc.getTextWidth(msj) / 2);
//   doc.text(firma, msjFinal, 270);

//   // Firma centrada
//   const firma = `Cordialmente, El equipo de Asegura Aqui!.com`;
//   const posicionFirmaX = (anchoPDF / 2) - (doc.getTextWidth(firma) / 2);
//   doc.text(firma, posicionFirmaX, 290); // Firma centrada

//   // Descargar el PDF
  doc.save(`Póliza de seguro automotriz(${car} ${marca} ${year}).pdf`);
  listo();
};








