const btnMenu = document.querySelector('.menu');
const btnExit = document.querySelector('.exit_menu');
const menuLateral = document.querySelector('.menu_lateral');
const enlaces = document.querySelectorAll('.list_menu .lin')
const currentYear = new Date().getFullYear();
const yearSelect = document.querySelector('#yearSelect');
const brandSelect = document.querySelector('#carBrandSelect');
const checkbox = document.querySelector('#aceptarPoliticas');
const modelSelect = document.querySelector('#modelSelect');
const btnContinue = document.querySelector('.btn_continue');
const msjAlert = document.querySelector('.msj_alert');
const linSercio = document.querySelectorAll('.lin_sercio');
const overlayDiv = document.querySelector('#overlay');
const listPoliza = document.querySelector('#list_poliza');
const btnXoverlay = document.querySelector('#btnXoverlay');

let DatosCar = {
  car:"",
  marca:"",
  year:""
}

document.addEventListener('DOMContentLoaded', (e) => {
  windowResponsibility();
});

yearSelect.addEventListener('change', carModelsSelect);

brandSelect.addEventListener('change', carModelsSelect);

window.addEventListener('resize', windowResponsibility);


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

for (let year = currentYear; year >= 2010; year--) {
  const yearSelect = document.querySelector('#yearSelect');
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

function carModelsSelect(){
  const selectedBrand = brandSelect.value;
  const selectedYear = yearSelect.value;

  modelSelect.innerHTML = '';

  if (selectedBrand && selectedYear && carModels[selectedBrand][selectedYear]) {
    carModels[selectedBrand][selectedYear].forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
}

btnContinue.addEventListener('click', function(event) {
  if (!checkbox.checked) {
    msjAlert.innerHTML = `<p class="text-red-500">Debes aceptar las políticas de seguridad para continuar</p>`;
  } else {
    msjAlert.innerHTML = ``;
    llenarDatosCar(event);
  }
});

function llenarDatosCar(event) {
  const selectedBrand = brandSelect.value;
  const selectedYear = yearSelect.value;
  const selectedModel = modelSelect.value;

  if (selectedBrand && selectedYear && selectedModel) {
    const DatosCar = {
      marca: selectedBrand,
      year: selectedYear,
      car: selectedModel
    };

    localStorage.setItem('DatosCar', JSON.stringify(DatosCar));

    setTimeout(() => {
      window.location.href = "finish.html";
    }, 100);
  
  } else {
    event.preventDefault(); // Evitar el envío del formulario
    msjAlert.innerHTML = `<p class="text-red-500">Completa todos los campos</p>`;
  }
}

// card models 

const carModels = {
  "chevrolet": {
    "2010": ["Aveo", "Optra", "Malibu", "Tracker", "Sonic"],
    "2011": ["Aveo", "Sonic", "Malibu", "Tracker", "Captiva"],
    "2012": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2013": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2014": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2015": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2016": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2017": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2018": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2019": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2020": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2021": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2022": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"],
    "2023": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail"],
    "2024": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando"]
  },
  "ford": {
    "2010": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2011": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2012": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2013": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2014": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2015": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2016": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2017": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2018": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2019": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2020": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2021": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2022": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"],
    "2023": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion"],
    "2024": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang"]
  },
  "toyota": {
    "2010": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2011": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2012": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2013": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2014": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2015": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2016": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2017": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2018": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2019": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2020": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2021": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2022": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2023": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"],
    "2024": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4"]
  },
  "nissan": {
    "2010": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2011": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2012": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2013": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2014": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2015": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2016": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2017": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2018": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2019": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2020": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2021": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2022": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2023": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"],
    "2024": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder"]
  },
  "mazda": {
    "2010": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2011": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2012": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2013": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2014": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2015": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2016": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2017": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2018": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2019": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2020": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2021": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2022": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2023": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"],
    "2024": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9"]
  },
  "renault": {
    "2010": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2011": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2012": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2013": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2014": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2015": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2016": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2017": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2018": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2019": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2020": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2021": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2022": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2023": ["Clio", "Sandero", "Duster", "Logan", "Captur"],
    "2024": ["Clio", "Sandero", "Duster", "Logan", "Captur"]
  },
  "suzuki": {
    "2010": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2011": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2012": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2013": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2014": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2015": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2016": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2017": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2018": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2019": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2020": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2021": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2022": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2023": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"],
    "2024": ["Swift", "Vitara", "SX4", "Jimny", "Celerio"]
  },
  "hyundai": {
    "2010": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2011": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2012": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2013": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2014": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2015": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2016": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2017": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2018": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2019": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2020": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2021": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2022": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2023": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"],
    "2024": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10"]
  },
  "kia": {
    "2010": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2011": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2012": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2013": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2014": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2015": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2016": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2017": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2018": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2019": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2020": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2021": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2022": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2023": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"],
    "2024": ["Rio", "Cerato", "Sportage", "Sorento", "Optima"]
  },
  "fiat": {
    "2010": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2011": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2012": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2013": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2014": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2015": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2016": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2017": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2018": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2019": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2020": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2021": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2022": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2023": ["Punto", "Palio", "500", "Doblò", "Freemont"],
    "2024": ["Punto", "Palio", "500", "Doblò", "Freemont"]
  },
  "dodge": {
    "2010": ["Charger", "Challenger", "Durango", "Journey", "Avenger"],
    "2011": ["Charger", "Challenger", "Durango", "Journey", "Avenger"],
    "2012": ["Charger", "Challenger", "Durango", "Journey", "Avenger"],
    "2013": ["Charger", "Challenger", "Durango", "Journey", "Avenger"],
    "2014": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2015": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2016": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2017": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2018": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2019": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2020": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2021": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2022": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2023": ["Charger", "Challenger", "Durango", "Journey", "Dart"],
    "2024": ["Charger", "Challenger", "Durango", "Journey", "Dart"]
  },
  "chrysler": {
    "2010": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2011": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2012": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2013": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2014": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2015": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2016": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica"],
    "2017": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2018": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2019": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2020": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2021": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2022": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2023": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"],
    "2024": ["300", "Pacifica", "Voyager", "Aspen", "Town & Country"]
  },
  "volkswagen": {
    "2010": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2011": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2012": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2013": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2014": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2015": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2016": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2017": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2018": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2019": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2020": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2021": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2022": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2023": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"],
    "2024": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle"]
  },
  "audi": {
    "2010": ["A3", "A4", "A6", "Q5", "Q7"],
    "2011": ["A3", "A4", "A6", "Q5", "Q7"],
    "2012": ["A3", "A4", "A6", "Q5", "Q7"],
    "2013": ["A3", "A4", "A6", "Q5", "Q7"],
    "2014": ["A3", "A4", "A6", "Q5", "Q7"],
    "2015": ["A3", "A4", "A6", "Q5", "Q7"],
    "2016": ["A3", "A4", "A6", "Q5", "Q7"],
    "2017": ["A3", "A4", "A6", "Q5", "Q7"],
    "2018": ["A3", "A4", "A6", "Q5", "Q7"],
    "2019": ["A3", "A4", "A6", "Q5", "Q7"],
    "2020": ["A3", "A4", "A6", "Q5", "Q7"],
    "2021": ["A3", "A4", "A6", "Q5", "Q7"],
    "2022": ["A3", "A4", "A6", "Q5", "Q7"],
    "2023": ["A3", "A4", "A6", "Q5", "Q7"],
    "2024": ["A3", "A4", "A6", "Q5", "Q7"]
  },
  "mercedes": {
    "2010": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2011": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2012": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2013": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2014": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2015": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2016": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2017": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2018": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2019": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2020": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2021": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2022": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2023": ["C-Class", "E-Class", "S-Class", "GLK", "ML"],
    "2024": ["C-Class", "E-Class", "S-Class", "GLK", "ML"]
  },
  "bmw": {
    "2010": ["Serie 1", "Serie 3", "Serie 5", "X3", "X5"],
    "2011": ["Serie 1", "Serie 3", "Serie 5", "X3", "X5"],
    "2012": ["Serie 1", "Serie 3", "Serie 5", "X3", "X6"],
    "2013": ["Serie 1", "Serie 3", "Serie 4", "X3", "X5"],
    "2014": ["Serie 2", "Serie 3", "Serie 4", "X3", "X5"],
    "2015": ["Serie 2", "Serie 3", "Serie 4", "X3", "X5"],
    "2016": ["Serie 2", "Serie 3", "Serie 4", "X1", "X5"],
    "2017": ["Serie 2", "Serie 3", "Serie 4", "X1", "X5"],
    "2018": ["Serie 3", "Serie 4", "Serie 5", "X2", "X3"],
    "2019": ["Serie 3", "Serie 4", "Serie 5", "X2", "X3"],
    "2020": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3"],
    "2021": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3"],
    "2022": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3"],
    "2023": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3"],
    "2024": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3"]
  },
  "mitsubishi": {
    "2010": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2011": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2012": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2013": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2014": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2015": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2016": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2017": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2018": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2019": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2020": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2021": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2022": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2023": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"],
    "2024": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR"]
  },
  "subaru": {
    "2010": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2011": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2012": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2013": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2014": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2015": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2016": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2017": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2018": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2019": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2020": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2021": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2022": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2023": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"],
    "2024": ["Impreza", "Forester", "Outback", "Legacy", "BRZ"]
  },
  "honda": {
    "2010": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2011": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2012": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2013": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2014": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2015": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2016": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2017": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2018": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2019": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2020": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2021": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2022": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2023": ["Civic", "Accord", "CR-V", "Fit", "Pilot"],
    "2024": ["Civic", "Accord", "CR-V", "Fit", "Pilot"]
  },
  "land_rover": {
    "2010": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2011": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2012": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2013": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2014": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2015": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2016": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2017": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2018": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2019": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2020": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2021": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2022": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2023": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"],
    "2024": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander"]
  }
};