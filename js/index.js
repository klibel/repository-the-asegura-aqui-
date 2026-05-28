// --- SELECTORES DEL DOM ---
const btnExit = document.querySelector('.exit_menu');
const btnMenu = document.querySelector('.menu');
const btnAseg = document.querySelector('.btn_asegure');
const menuLateral = document.querySelector('.menu_lateral');
const enlacesMenu = document.querySelectorAll('.menu_lateral .nav-link');
const enlacesNav = document.querySelectorAll('.nav-link'); // Selecciona todos los enlaces de navegación
const linServicio = document.querySelectorAll('.lin_sercio');
const overlayDiv = document.querySelector('#overlay');
const listPoliza = document.querySelector('#list_poliza');
const btnXoverlay = document.querySelector('#btnXoverlay');

// --- MANEJADORES DE EVENTOS (LISTENERS) ---

document.addEventListener('DOMContentLoaded', () => {
  verificarResolucion();
});

// Control del Menú Lateral Móvil
btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menuLateral.classList.remove('hidden');
  menuLateral.classList.add('flex');
});

btnExit.addEventListener('click', (e) => {
  e.preventDefault();
  cerrarMenuLateral();
});

// Cerrar menú móvil al hacer click en cualquier opción
enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', () => cerrarMenuLateral());
});

// Redirección del botón Asegurar Ya!
if (btnAseg) {
  btnAseg.addEventListener('click', () => {
    window.location.href = "income.html";
  });
}

// Control del Modal de Servicios (Poliza)
linServicio.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModalServicios();
  });
});

btnXoverlay.addEventListener('click', cerrarModalServicios);
overlayDiv.addEventListener('click', cerrarModalServicios); // Cerrar también si se pisa fuera del recuadro blanco

// Control del cambio de tamaño de pantalla
window.addEventListener('resize', verificarResolucion);

// --- NAVEGACIÓN LIMPIA (Desplazamiento suave y remover '#' de la URL) ---
enlacesNav.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    
    // Ejecutar solo si es un enlace de anclaje interno que empiece con '#'
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Desplazamiento suave nativo del navegador
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Limpia el '#' de la barra de direcciones del navegador sin recargar la página
        window.history.pushState(null, null, ' ');
      }
    }
  });
});


// --- FUNCIONES AUXILIARES ---

function cerrarMenuLateral() {
  menuLateral.classList.remove('flex');
  menuLateral.classList.add('hidden');
}

function abrirModalServicios() {
  cerrarMenuLateral(); // Por si abren el modal desde el menú móvil
  overlayDiv.classList.remove('hidden');
  listPoliza.classList.remove('hidden');
  listPoliza.classList.add('flex');
}

function cerrarModalServicios() {
  overlayDiv.classList.add('hidden');
  listPoliza.classList.remove('flex');
  listPoliza.classList.add('hidden');
}

function verificarResolucion() {
  // 768px es el breakpoint oficial de Tailwind para 'md' (Medium devices)
  if (window.innerWidth >= 768) {
    cerrarMenuLateral();
  }
}
