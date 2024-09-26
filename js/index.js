const btnExit = document.querySelector('.exit_menu');
const btnMenu = document.querySelector('.menu');
const btnAseg = document.querySelector('.btn_asegure');
const menuLateral = document.querySelector('.menu_lateral');
const enlaces = document.querySelectorAll('.list_menu .lin');
const linSercio = document.querySelectorAll('.lin_sercio');
const overlayDiv = document.querySelector('#overlay');
const listPoliza = document.querySelector('#list_poliza');
const btnXoverlay = document.querySelector('#btnXoverlay');

document.addEventListener('DOMContentLoaded', (e) => {
  windowResponsibility();
});

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

btnAseg.addEventListener('click', e => {
  window.location.href = "income.html";
})

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





