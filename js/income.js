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
    "2010": ["Aveo", "Optra", "Malibu", "Tracker", "Sonic", "Cruze", "Spark", "Tahoe"],
    "2011": ["Aveo", "Sonic", "Malibu", "Tracker", "Captiva", "Cruze", "Spark", "Camaro"],
    "2012": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando", "Cruze", "Spark", "Trailblazer"],
    "2013": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail", "Cruze", "Spark", "Orlando"],
    "2014": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando", "Cruze", "Spark", "Sail"],
    "2015": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail", "Cruze", "Spark", "Tahoe"],
    "2016": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando", "Cruze", "Spark", "Onix"],
    "2017": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail", "Cruze", "Spark", "Onix"],
    "2018": ["Sonic", "Malibu", "Tracker", "Captiva", "Orlando", "Cruze", "Equinox", "Onix"],
    "2019": ["Sonic", "Malibu", "Tracker", "Captiva", "Sail", "Cruze", "Equinox", "Onix"],
    "2020": ["Onix", "Malibu", "Tracker", "Captiva", "Groove", "Equinox", "Blazer", "Colorado"],
    "2021": ["Onix", "Malibu", "Tracker", "Captiva", "Groove", "Equinox", "Blazer", "Colorado"],
    "2022": ["Onix", "Malibu", "Tracker", "Captiva", "Groove", "Equinox", "Blazer", "Silverado"],
    "2023": ["Onix", "Tracker", "Captiva", "Groove", "Equinox", "Blazer", "Silverado", "Montana"],
    "2024": ["Onix", "Tracker", "Captiva", "Groove", "Equinox", "Blazer", "Silverado", "Montana"],
    "2025": ["Onix", "Tracker", "Captiva", "Groove", "Equinox EV", "Blazer EV", "Silverado", "Montana"],
    "2026": ["Onix", "Tracker", "Captiva", "Groove", "Equinox EV", "Blazer EV", "Silverado", "Aveo Hatchback"]
  },
  "ford": {
    "2010": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge"],
    "2011": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion", "EcoSport", "Ranger", "Mustang"],
    "2012": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge"],
    "2013": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion", "EcoSport", "Ranger", "Escape"],
    "2014": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge"],
    "2015": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion", "EcoSport", "Ranger", "Escape"],
    "2016": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge"],
    "2017": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion", "EcoSport", "Ranger", "Escape"],
    "2018": ["Fiesta", "Focus", "Mondeo", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge"],
    "2019": ["Fiesta", "Focus", "Mondeo", "Explorer", "Fusion", "EcoSport", "Ranger", "Escape"],
    "2020": ["Fiesta", "Focus", "Explorer", "Mustang", "EcoSport", "Ranger", "Edge", "Territory"],
    "2021": ["Explorer", "Mustang", "Ranger", "Edge", "Territory", "Bronco Sport", "Bronco", "Mach-E"],
    "2022": ["Explorer", "Mustang", "Ranger", "Territory", "Bronco Sport", "Bronco", "Mach-E", "Maverick"],
    "2023": ["Explorer", "Mustang", "Ranger", "Territory", "Bronco Sport", "Bronco", "Mach-E", "Maverick"],
    "2024": ["Explorer", "Mustang", "Ranger", "Territory", "Bronco Sport", "Bronco", "Mach-E", "Maverick"],
    "2025": ["Explorer", "Mustang", "Ranger", "Territory", "Bronco Sport", "Bronco", "Mach-E", "Maverick"],
    "2026": ["Explorer", "Mustang", "Ranger", "Territory", "Bronco Sport", "Bronco", "Puma EV", "Maverick"]
  },
  "toyota": {
    "2010": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2011": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2012": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2013": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2014": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2015": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Land Cruiser"],
    "2016": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Prado"],
    "2017": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Prius"],
    "2018": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "C-HR"],
    "2019": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "C-HR"],
    "2020": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Corolla Cross"],
    "2021": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "4Runner", "Fortuner", "Corolla Cross"],
    "2022": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Fortuner", "Corolla Cross", "Yaris Cross"],
    "2023": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Fortuner", "Corolla Cross", "Yaris Cross"],
    "2024": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Fortuner", "Corolla Cross", "Yaris Cross"],
    "2025": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Fortuner", "Corolla Cross", "Grand Highlander"],
    "2026": ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Fortuner", "Corolla Cross", "bZ4X"]
  },
  "nissan": {
    "2010": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Tiida", "March", "Frontier"],
    "2011": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Tiida", "March", "Frontier"],
    "2012": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Tiida", "March", "Frontier"],
    "2013": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Tiida", "March", "Frontier"],
    "2014": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Note"],
    "2015": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Note"],
    "2016": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Kicks"],
    "2017": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Kicks"],
    "2018": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Kicks"],
    "2019": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "March", "Frontier", "Kicks"],
    "2020": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "V-Drive", "Frontier", "Kicks"],
    "2021": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Magnite"],
    "2022": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Leaf"],
    "2023": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Qashqai"],
    "2024": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Qashqai"],
    "2025": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Ariya"],
    "2026": ["Versa", "Sentra", "Altima", "X-Trail", "Pathfinder", "Frontier", "Kicks", "Ariya"]
  },
  "mazda": {
    "2010": ["Mazda2", "Mazda3", "Mazda6", "CX-7", "CX-9", "BT-50", "MX-5"],
    "2011": ["Mazda2", "Mazda3", "Mazda6", "CX-7", "CX-9", "BT-50", "MX-5"],
    "2012": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "MX-5"],
    "2013": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "MX-5"],
    "2014": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "MX-5"],
    "2015": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "CX-3"],
    "2016": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "CX-3"],
    "2017": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "CX-3"],
    "2018": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50", "CX-3"],
    "2019": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "CX-3", "CX-30"],
    "2020": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "CX-3", "CX-30"],
    "2021": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "CX-3", "CX-30", "CX-50"],
    "2022": ["Mazda2", "Mazda3", "Mazda6", "CX-5", "CX-9", "CX-30", "CX-50", "MX-30"],
    "2023": ["Mazda2", "Mazda3", "CX-5", "CX-30", "CX-50", "CX-60", "CX-90", "MX-5"],
    "2024": ["Mazda2", "Mazda3", "CX-5", "CX-30", "CX-50", "CX-60", "CX-90", "CX-70"],
    "2025": ["Mazda2", "Mazda3", "CX-5", "CX-30", "CX-50", "CX-60", "CX-90", "CX-70"],
    "2026": ["Mazda2", "Mazda3", "CX-5", "CX-30", "CX-50", "CX-60", "CX-90", "CX-80"]
  },
  "renault": {
    "2010": ["Clio", "Sandero", "Logan", "Megane", "Scenic", "Symbol", "Kangoo"],
    "2011": ["Clio", "Sandero", "Duster", "Logan", "Megane", "Fluence", "Symbol"],
    "2012": ["Clio", "Sandero", "Duster", "Logan", "Fluence", "Symbol", "Stepway"],
    "2013": ["Clio", "Sandero", "Duster", "Logan", "Fluence", "Stepway", "Koleos"],
    "2014": ["Clio", "Sandero", "Duster", "Logan", "Fluence", "Stepway", "Koleos"],
    "2015": ["Clio", "Sandero", "Duster", "Logan", "Fluence", "Stepway", "Captur"],
    "2016": ["Clio", "Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid"],
    "2017": ["Clio", "Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch"],
    "2018": ["Clio", "Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch"],
    "2019": ["Clio", "Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch"],
    "2020": ["Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch", "Arkana"],
    "2021": ["Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch", "Arkana"],
    "2022": ["Sandero", "Duster", "Logan", "Stepway", "Captur", "Kwid", "Oroch", "Zoe"],
    "2023": ["Sandero", "Duster", "Logan", "Stepway", "Kwid", "Oroch", "Megane E-Tech", "Kardian"],
    "2024": ["Sandero", "Duster", "Logan", "Stepway", "Kwid", "Oroch", "Megane E-Tech", "Kardian"],
    "2025": ["Duster", "Stepway", "Kwid", "Oroch", "Megane E-Tech", "Kardian", "Rafale", "Symbioz"],
    "2026": ["Duster", "Kwid EV", "Oroch", "Megane E-Tech", "Kardian", "Rafale", "Symbioz", "Renault 5"]
  },
  "suzuki": {
    "2010": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "Grand Vitara", "Alto"],
    "2011": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "Grand Vitara", "Alto"],
    "2012": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "Grand Vitara", "Ertiga"],
    "2013": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "Grand Vitara", "Ertiga"],
    "2014": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "Grand Vitara", "Ertiga"],
    "2015": ["Swift", "Vitara", "SX4", "Jimny", "Celerio", "S-Cross", "Ertiga"],
    "2016": ["Swift", "Vitara", "Jimny", "Celerio", "S-Cross", "Ertiga", "Baleno", "Ignis"],
    "2017": ["Swift", "Vitara", "Jimny", "Celerio", "S-Cross", "Ertiga", "Baleno", "Ignis"],
    "2018": ["Swift", "Vitara", "Jimny", "Celerio", "S-Cross", "Ertiga", "Baleno", "Ignis"],
    "2019": ["Swift", "Vitara", "Jimny", "Celerio", "S-Cross", "Ertiga", "Baleno", "Ignis"],
    "2020": ["Swift", "Vitara", "Jimny", "Celerio", "S-Cross", "Ertiga", "Baleno", "Ignis"],
    "2021": ["Swift", "Vitara", "Jimny", "S-Cross", "Ertiga", "Baleno", "Ignis", "Dzire"],
    "2022": ["Swift", "Vitara", "Jimny", "S-Cross", "Ertiga", "Baleno", "Ignis", "Dzire"],
    "2023": ["Swift", "Grand Vitara", "Jimny", "S-Cross", "Ertiga", "Baleno", "Ignis", "Fronx"],
    "2024": ["Swift", "Grand Vitara", "Jimny 5-Door", "S-Cross", "Ertiga", "Baleno", "Fronx", "xl7"],
    "2025": ["Swift", "Grand Vitara", "Jimny 5-Door", "S-Cross", "Ertiga", "Baleno", "Fronx", "eVX"],
    "2026": ["Swift", "Grand Vitara", "Jimny 5-Door", "S-Cross", "Ertiga", "Baleno", "Fronx", "eVX"]
  },
  "hyundai": {
    "2010": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "Getz", "Veracruz"],
    "2011": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "i30", "Veloster"],
    "2012": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "i30", "Veloster"],
    "2013": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "i20", "Sanata Fe Sport"],
    "2014": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "Creta", "i20"],
    "2015": ["Elantra", "Sonata", "Tucson", "Santa Fe", "i10", "Accent", "Creta", "i20"],
    "2016": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Ioniq"],
    "2017": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Ioniq"],
    "2018": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Kona"],
    "2019": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Kona", "Palisade"],
    "2020": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Kona", "Palisade"],
    "2021": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Accent", "Creta", "Ioniq 5"],
    "2022": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Grand i10", "Creta", "Kona", "Ioniq 5", "HB20"],
    "2023": ["Elantra", "Tucson", "Santa Fe", "Grand i10", "Creta", "Kona", "Ioniq 5", "Ioniq 6", "HB20"],
    "2024": ["Elantra", "Tucson", "Santa Fe", "Grand i10", "Creta", "Kona", "Ioniq 5", "Ioniq 6", "HB20"],
    "2025": ["Elantra", "Tucson", "Santa Fe", "Grand i10", "Creta", "Kona", "Ioniq 5", "Ioniq 9", "HB20"],
    "2026": ["Elantra", "Tucson", "Santa Fe", "Grand i10", "Creta", "Kona", "Ioniq 5", "Ioniq 9", "HB20"]
  },
  "kia": {
    "2010": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Carens"],
    "2011": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Carens"],
    "2012": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Carens"],
    "2013": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Carens"],
    "2014": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Carens"],
    "2015": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro"],
    "2016": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro", "Stinger"],
    "2017": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro", "Stonic"],
    "2018": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro", "Stonic"],
    "2019": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro", "Seltos"],
    "2020": ["Rio", "Cerato", "Sportage", "Sorento", "Optima", "Picanto", "Soul", "Niro", "Seltos"],
    "2021": ["Rio", "Cerato", "Sportage", "Sorento", "K5", "Picanto", "Soul", "Niro", "Seltos", "EV6"],
    "2022": ["Rio", "Cerato", "Sportage", "Sorento", "K5", "Picanto", "Soul", "Seltos", "EV6", "Sonet"],
    "2023": ["K3", "Cerato", "Sportage", "Sorento", "Picanto", "Soul", "Seltos", "EV6", "Sonet", "EV9"],
    "2024": ["K3", "Cerato", "Sportage", "Sorento", "Picanto", "Seltos", "EV6", "Sonet", "EV9", "K4"],
    "2025": ["K3", "Sportage", "Sorento", "Picanto", "Seltos", "EV6", "EV9", "K4", "EV3"],
    "2026": ["K3", "Sportage", "Sorento", "Picanto", "Seltos", "EV6", "EV9", "K4", "EV3", "Tasman"]
  },
  "fiat": {
    "2010": ["Punto", "Palio", "500", "Doblò", "Idea", "Uno", "Siena", "Stilo"],
    "2011": ["Punto", "Palio", "500", "Doblò", "Uno", "Siena", "Fiorino", "Bravo"],
    "2012": ["Punto", "Palio", "500", "Doblò", "Grand Siena", "Uno", "Fiorino", "Palio Weekend"],
    "2013": ["Punto", "Palio", "500", "Doblò", "Grand Siena", "Uno", "Fiorino", "Chronos"],
    "2014": ["Punto", "Palio", "500", "Doblò", "Grand Siena", "Uno", "Fiorino", "Mobi"],
    "2015": ["Punto", "Palio", "500", "Doblò", "Grand Siena", "Uno", "Fiorino", "Mobi", "Toro"],
    "2016": ["Punto", "Palio", "500", "Doblò", "Uno", "Fiorino", "Mobi", "Toro", "Tipo"],
    "2017": ["Punto", "500", "Uno", "Fiorino", "Mobi", "Toro", "Tipo", "Argo"],
    "2018": ["500", "Uno", "Fiorino", "Mobi", "Toro", "Tipo", "Argo", "Cronos"],
    "2019": ["500", "Uno", "Fiorino", "Mobi", "Toro", "Tipo", "Argo", "Cronos"],
    "2020": ["500", "Uno", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada"],
    "2021": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse"],
    "2022": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse", "Fastback"],
    "2023": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse", "Fastback"],
    "2024": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse", "Fastback", "Titano"],
    "2025": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse", "Fastback", "Grande Panda"],
    "2026": ["500e", "Fiorino", "Mobi", "Toro", "Argo", "Cronos", "Strada", "Pulse", "Fastback", "Grande Panda"]
  },
  "dodge": {
    "2010": ["Charger", "Challenger", "Durango", "Journey", "Avenger", "Caliber", "Ram 1500", "Neon"],
    "2011": ["Charger", "Challenger", "Durango", "Journey", "Avenger", "Caliber", "Ram 1500"],
    "2012": ["Charger", "Challenger", "Durango", "Journey", "Avenger", "Dart", "Grand Caravan"],
    "2013": ["Charger", "Challenger", "Durango", "Journey", "Avenger", "Dart", "Grand Caravan"],
    "2014": ["Charger", "Challenger", "Durango", "Journey", "Dart", "Grand Caravan", "Neon"],
    "2015": ["Charger", "Challenger", "Durango", "Journey", "Dart", "Grand Caravan", "Neon"],
    "2016": ["Charger", "Challenger", "Durango", "Journey", "Dart", "Grand Caravan", "Neon", "Attitude"],
    "2017": ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan", "Neon", "Attitude"],
    "2018": ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan", "Neon", "Attitude"],
    "2019": ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan", "Neon", "Attitude"],
    "2020": ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan", "Neon", "Attitude"],
    "2021": ["Charger", "Challenger", "Durango", "Attitude", "Neon"],
    "2022": ["Charger", "Challenger", "Durango", "Attitude", "Journey (China Type)"],
    "2023": ["Charger", "Challenger", "Durango", "Attitude", "Hornet"],
    "2024": ["Charger", "Challenger", "Durango", "Attitude", "Hornet", "Charger Daytona EV"],
    "2025": ["Durango", "Hornet", "Charger Daytona EV", "Charger SixPack", "Attitude"],
    "2026": ["Durango", "Hornet", "Charger Daytona EV", "Charger SixPack", "Stealth EV"]
  },
  "chrysler": {
    "2010": ["300", "Town & Country", "Aspen", "Voyager", "Pacifica", "Sebring", "PT Cruiser"],
    "2011": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2012": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2013": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2014": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2015": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2016": ["300", "Town & Country", "Voyager", "Pacifica", "200"],
    "2017": ["300", "Pacifica", "Voyager", "Town & Country"],
    "2018": ["300", "Pacifica", "Voyager"],
    "2019": ["300", "Pacifica", "Voyager"],
    "2020": ["300", "Pacifica", "Voyager"],
    "2021": ["300", "Pacifica", "Voyager"],
    "2022": ["300", "Pacifica", "Voyager"],
    "2023": ["300", "Pacifica", "Voyager"],
    "2024": ["Pacifica", "Voyager"],
    "2025": ["Pacifica", "Voyager", "Halcyon EV"],
    "2026": ["Pacifica", "Voyager", "Halcyon EV", "Airflow Crossover"]
  },
  "volkswagen": {
    "2010": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Bora", "Touareg"],
    "2011": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Touareg"],
    "2012": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol"],
    "2013": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol"],
    "2014": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol", "Up!"],
    "2015": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol", "Up!"],
    "2016": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol", "Up!"],
    "2017": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Gol", "Virtus"],
    "2018": ["Golf", "Jetta", "Passat", "Tiguan", "Beetle", "Polo", "Amarok", "Virtus", "T-Roc"],
    "2019": ["Golf", "Jetta", "Passat", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "T-Roc"],
    "2020": ["Golf", "Jetta", "Passat", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "ID.3"],
    "2021": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4"],
    "2022": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4", "ID.Buzz"],
    "2023": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4", "ID.Buzz", "Saveiro"],
    "2024": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4", "ID.Buzz", "Saveiro"],
    "2025": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4", "ID.7", "Tera"],
    "2026": ["Golf", "Jetta", "Tiguan", "Polo", "Amarok", "Virtus", "T-Cross", "Nivus", "Taos", "ID.4", "ID.2all", "Tera"]
  },
  "audi": {
    "2010": ["A3", "A4", "A6", "Q5", "Q7", "A1", "TT", "R8"],
    "2011": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3"],
    "2012": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3"],
    "2013": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3"],
    "2014": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3"],
    "2015": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3", "TT"],
    "2016": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3", "Q2"],
    "2017": ["A3", "A4", "A6", "Q5", "Q7", "A1", "A5", "A7", "Q3", "Q2"],
    "2018": ["A3", "A4", "A6", "Q5", "Q7", "A5", "A7", "Q3", "Q2", "e-tron"],
    "2019": ["A3", "A4", "A6", "Q5", "Q7", "A5", "A7", "Q3", "Q8", "e-tron"],
    "2020": ["A3", "A4", "A6", "Q5", "Q7", "A5", "A7", "Q3", "Q8", "e-tron", "Q4 e-tron"],
    "2021": ["A3", "A4", "A6", "Q5", "Q7", "A5", "A7", "Q3", "Q8", "e-tron GT"],
    "2022": ["A3", "A4", "A6", "Q5", "Q7", "A5", "Q3", "Q8", "Q4 e-tron", "e-tron GT"],
    "2023": ["A3", "A4", "A6", "Q5", "Q7", "A5", "Q3", "Q8", "Q4 e-tron", "e-tron GT", "Q8 e-tron"],
    "2024": ["A3", "A4", "A6", "Q5", "Q7", "A5", "Q3", "Q8", "Q4 e-tron", "e-tron GT", "Q8 e-tron", "Q6 e-tron"],
    "2025": ["A3", "A4", "A5", "A6 e-tron", "Q3", "Q5", "Q7", "Q8", "Q4 e-tron", "Q6 e-tron", "e-tron GT"],
    "2026": ["A3", "A4", "A5", "A6 e-tron", "Q3", "Q5", "Q7", "Q8", "Q4 e-tron", "Q6 e-tron", "e-tron GT"]
  },
  "mercedes": {
    "2010": ["C-Class", "E-Class", "S-Class", "GLK", "ML", "A-Class", "B-Class", "SLK"],
    "2011": ["C-Class", "E-Class", "S-Class", "GLK", "ML", "A-Class", "B-Class", "CLS"],
    "2012": ["C-Class", "E-Class", "S-Class", "GLK", "ML", "A-Class", "B-Class", "CLS"],
    "2013": ["C-Class", "E-Class", "S-Class", "GLK", "ML", "A-Class", "CLA", "GLA"],
    "2014": ["C-Class", "E-Class", "S-Class", "GLK", "ML", "A-Class", "CLA", "GLA"],
    "2015": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLA"],
    "2016": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLA", "GLS"],
    "2017": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLA", "GLS"],
    "2018": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLA", "EQC"],
    "2019": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLB", "GLS"],
    "2020": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class", "CLA", "GLB", "GLS", "EQA"],
    "2021": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "CLA", "GLB", "GLS", "EQA", "EQE", "EQS"],
    "2022": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLB", "GLS", "EQA", "EQB", "EQE", "EQS"],
    "2023": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLB", "GLS", "EQA", "EQB", "EQE", "EQS", "CLE"],
    "2024": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLB", "GLS", "EQA", "EQB", "EQE", "EQS", "CLE"],
    "2025": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLB", "GLS", "CLA EV", "EQA", "EQB", "EQE", "CLE"],
    "2026": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLB", "GLS", "CLA EV", "EQA", "EQB", "CLE"]
  },
  "bmw": {
    "2010": ["Serie 1", "Serie 3", "Serie 5", "X3", "X5", "Serie 7", "X1", "Z4"],
    "2011": ["Serie 1", "Serie 3", "Serie 5", "X3", "X5", "Serie 7", "X1", "X6"],
    "2012": ["Serie 1", "Serie 3", "Serie 5", "X3", "X6", "Serie 6", "X1", "X5"],
    "2013": ["Serie 1", "Serie 3", "Serie 4", "X3", "X5", "Serie 5", "X1", "i3"],
    "2014": ["Serie 2", "Serie 3", "Serie 4", "X3", "X5", "X1", "i3", "i8"],
    "2015": ["Serie 2", "Serie 3", "Serie 4", "X3", "X5", "X1", "X4", "i3"],
    "2016": ["Serie 2", "Serie 3", "Serie 4", "X1", "X5", "X3", "X4", "Serie 7"],
    "2017": ["Serie 2", "Serie 3", "Serie 4", "X1", "X5", "X3", "X4", "Serie 5"],
    "2018": ["Serie 3", "Serie 4", "Serie 5", "X2", "X3", "X1", "X4", "X5", "X7"],
    "2019": ["Serie 3", "Serie 4", "Serie 5", "X2", "X3", "X1", "X5", "X7", "Serie 1"],
    "2020": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3", "X5", "X7", "iX3", "Serie 1"],
    "2021": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3", "X5", "X7", "iX", "i4"],
    "2022": ["Serie 2", "Serie 3", "Serie 4", "X1", "X3", "X5", "X7", "iX", "i4", "i7"],
    "2023": ["Serie 1", "Serie 2", "Serie 3", "Serie 4", "X1", "X3", "X5", "X7", "iX", "i4", "i7", "XM"],
    "2024": ["Serie 1", "Serie 2", "Serie 3", "Serie 4", "X1", "X3", "X5", "X7", "iX", "i4", "i7", "XM", "iX2"],
    "2025": ["Serie 1", "Serie 2", "Serie 3", "Serie 5", "X1", "X3", "X5", "X7", "iX", "i4", "i7", "Neue Klasse iX3"],
    "2026": ["Serie 1", "Serie 2", "Serie 3", "Serie 5", "X1", "X3", "X5", "X7", "Neue Klasse i3", "Neue Klasse iX3"]
  },
  "mitsubishi": {
    "2010": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR", "Montero", "L200", "Colt"],
    "2011": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR", "Montero", "L200", "ASX"],
    "2012": ["Outlander", "Lancer", "Eclipse", "Galant", "RVR", "Montero", "L200", "Mirage"],
    "2013": ["Outlander", "Lancer", "Eclipse", "RVR", "Montero", "L200", "Mirage", "ASX"],
    "2014": ["Outlander", "Lancer", "RVR", "Montero", "L200", "Mirage", "ASX", "Attrage"],
    "2015": ["Outlander", "Lancer", "RVR", "Montero", "L200", "Mirage", "ASX", "Attrage"],
    "2016": ["Outlander", "Lancer", "RVR", "Montero", "L200", "Mirage", "ASX", "Pajero Sport"],
    "2017": ["Outlander", "Lancer", "RVR", "Montero", "L200", "Mirage", "ASX", "Eclipse Cross"],
    "2018": ["Outlander", "RVR", "Montero", "L200", "Mirage", "ASX", "Eclipse Cross", "Xpander"],
    "2019": ["Outlander", "RVR", "Montero", "L200", "Mirage", "ASX", "Eclipse Cross", "Xpander"],
    "2020": ["Outlander", "RVR", "Montero", "L200", "Mirage", "ASX", "Eclipse Cross", "Xpander"],
    "2021": ["Outlander", "L200", "Mirage", "ASX", "Eclipse Cross", "Xpander"],
    "2022": ["Outlander", "L200", "Mirage", "ASX", "Eclipse Cross", "Xpander", "Airtrek"],
    "2023": ["Outlander", "L200", "ASX (Renault Based)", "Eclipse Cross", "Xpander", "Colt"],
    "2024": ["Outlander", "L200 Triton", "ASX", "Eclipse Cross", "Xpander", "Colt", "Xforce"],
    "2025": ["Outlander", "L200 Triton", "ASX", "Eclipse Cross", "Xpander", "Colt", "Xforce", "Outlander Sport"],
    "2026": ["Outlander", "L200 Triton", "ASX", "Eclipse Cross", "Xpander", "Xforce", "New SUV EV"]
  },
  "subaru": {
    "2010": ["Impreza", "Forester", "Outback", "Legacy", "Tribeca", "WRX"],
    "2011": ["Impreza", "Forester", "Outback", "Legacy", "Tribeca", "WRX", "XV"],
    "2012": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV Crosstrek"],
    "2013": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV Crosstrek"],
    "2014": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV Crosstrek", "Levorg"],
    "2015": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV Crosstrek", "Levorg"],
    "2016": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Levorg"],
    "2017": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Levorg"],
    "2018": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Ascent"],
    "2019": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Ascent"],
    "2020": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Ascent"],
    "2021": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Ascent", "Solterra"],
    "2022": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "XV", "Ascent", "Solterra"],
    "2023": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "Crosstrek", "Ascent", "Solterra"],
    "2024": ["Impreza", "Forester", "Outback", "Legacy", "BRZ", "WRX", "Crosstrek", "Ascent", "Solterra"],
    "2025": ["Impreza", "Forester", "Outback", "BRZ", "WRX", "Crosstrek", "Ascent", "Solterra"],
    "2026": ["Impreza", "Forester", "Outback", "BRZ", "WRX", "Crosstrek", "Ascent", "Solterra", "3-Row SUV EV"]
  },
  "honda": {
    "2010": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "Insight"],
    "2011": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "CR-Z"],
    "2012": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "Crosstour"],
    "2013": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "Brio"],
    "2014": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "Vezel"],
    "2015": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "BR-V"],
    "2016": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "BR-V", "Ridgeline"],
    "2017": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "BR-V", "WR-V"],
    "2018": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "Insight", "Clarity"],
    "2019": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "Passport"],
    "2020": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "Odyssey", "HR-V", "Passport", "Honda e"],
    "2021": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "City", "HR-V", "Passport", "BR-V"],
    "2022": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "City", "BR-V", "Passport", "Integra"],
    "2023": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "City", "BR-V", "Passport", "ZR-V", "WR-V"],
    "2024": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "City", "BR-V", "Passport", "ZR-V", "Prologue"],
    "2025": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "City", "Passport", "ZR-V", "Prologue", "0 Series Saloon"],
    "2026": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "City", "Passport", "Prologue", "0 Series Saloon", "0 Series Space-Hub"]
  },
  "land_rover": {
    "2010": ["Range Rover", "Discovery", "Defender", "Freelander", "Range Rover Sport"],
    "2011": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander", "Range Rover Sport"],
    "2012": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander", "Range Rover Sport"],
    "2013": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander", "Range Rover Sport"],
    "2014": ["Range Rover", "Discovery", "Evoque", "Defender", "Freelander", "Range Rover Sport", "Discovery Sport"],
    "2015": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport"],
    "2016": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport"],
    "2017": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2018": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2019": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2020": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2021": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2022": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2023": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2024": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar"],
    "2025": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar", "Range Rover EV"],
    "2026": ["Range Rover", "Discovery", "Evoque", "Defender", "Range Rover Sport", "Discovery Sport", "Velar", "Range Rover EV", "Sport EV"]
  },
  "jeep": {
    "2010": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot", "Commander"],
    "2011": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot"],
    "2012": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot"],
    "2013": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot"],
    "2014": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot"],
    "2015": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot", "Renegade"],
    "2016": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Patriot", "Renegade"],
    "2017": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade"],
    "2018": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade", "Grand Commander"],
    "2019": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator"],
    "2020": ["Cherokee", "Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator"],
    "2021": ["Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator", "Commander (LATAM)", "Grand Wagoneer"],
    "2022": ["Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator", "Commander", "Wagoneer"],
    "2023": ["Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator", "Commander", "Wagoneer", "Avenger"],
    "2024": ["Grand Cherokee", "Wrangler", "Compass", "Renegade", "Gladiator", "Commander", "Wagoneer", "Avenger", "Recon EV"],
    "2025": ["Grand Cherokee", "Wrangler", "Compass", "Gladiator", "Commander", "Wagoneer", "Avenger", "Wagoneer S EV", "Recon EV"],
    "2026": ["Grand Cherokee", "Wrangler", "Compass", "Gladiator", "Commander", "Avenger", "Wagoneer S EV", "Recon EV"]
  },
  "peugeot": {
    "2010": ["207", "308", "407", "3008", "5008", "Partner", "206+"],
    "2011": ["207", "308", "508", "3008", "5008", "Partner", "RCZ"],
    "2012": ["208", "308", "508", "3008", "5008", "Partner", "4008"],
    "2013": ["208", "308", "508", "2008", "3008", "5008", "Partner"],
    "2014": ["208", "308", "508", "2008", "3008", "5008", "Partner", "108"],
    "2015": ["208", "308", "508", "2008", "3008", "5008", "Partner"],
    "2016": ["208", "308", "508", "2008", "3008", "5008", "Partner", "Traveller"],
    "2017": ["208", "308", "508", "2008", "3008", "5008", "Partner", "Expert"],
    "2018": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek"],
    "2019": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek"],
    "2020": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek", "e-208"],
    "2021": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek", "e-2008"],
    "2022": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek", "408"],
    "2023": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek", "408", "e-308"],
    "2024": ["208", "308", "508", "2008", "3008", "5008", "Rifter", "Landtrek", "408", "E-3008"],
    "2025": ["208", "308", "508", "2008", "3008", "5008", "408", "E-3008", "E-5008"],
    "2026": ["208", "308", "2008", "3008", "5008", "408", "E-3008", "E-5008", "Inception EV"]
  },
  "byd": {
    "2010": ["F3", "F0", "F6", "e6", "S6"],
    "2011": ["F3", "F0", "G3", "e6", "S6"],
    "2012": ["F3", "F0", "G6", "e6", "S6", "Qin"],
    "2013": ["F3", "F0", "S6", "Qin", "Tang"],
    "2014": ["F3", "F0", "S7", "Qin", "Tang", "Song"],
    "2015": ["F3", "Yuan", "S7", "Qin", "Tang", "Song"],
    "2016": ["F3", "Yuan", "e5", "Qin", "Tang", "Song"],
    "2017": ["F3", "Yuan", "Song Max", "Qin", "Tang", "Song"],
    "2018": ["Qin Pro", "Tang", "Song", "Yuan EV", "E1", "Song Max"],
    "2019": ["Qin Pro", "Tang", "Song Pro", "Yuan EV", "Han", "E2"],
    "2020": ["Han EV", "Tang EV", "Song Pro", "Qin Plus", "Yuan", "D1"],
    "2021": ["Han", "Tang", "Song Plus", "Qin Plus", "Dolphin", "Yuan Plus (Atto 3)"],
    "2022": ["Han", "Tang", "Song Plus", "Qin Plus", "Dolphin", "Atto 3", "Seal", "Destroyer 05"],
    "2023": ["Han", "Tang", "Song Plus", "Qin Plus", "Dolphin", "Atto 3", "Seal", "Seagull", "Frigate 07"],
    "2024": ["Han", "Tang", "Song L", "Qin L", "Dolphin", "Atto 3", "Seal", "Seagull", "Shark", "Seal U"],
    "2025": ["Han", "Tang", "Song L", "Qin L", "Dolphin", "Atto 3", "Seal", "Seagull", "Shark", "Sealion 7"],
    "2026": ["Han", "Tang", "Song L", "Qin L", "Dolphin", "Atto 3", "Seal 5", "Seagull", "Shark", "Sealion 7", "Yangwang U8"]
  }
};