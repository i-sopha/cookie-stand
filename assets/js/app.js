'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tableEl = document.getElementById('sales-table');
console.log(tableEl);

let allStores = [];

// Constructor function: shared values between each cities
function City(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);
}

// Hour of Operation Heading

let hoursOfOperation = function () {
  // empty cell before 6am
  let headerRow = document.createElement('tr');
  tableEl.appendChild(headerRow);

  let thCell = document.createElement('th');
  headerRow.appendChild(thCell);

  // 6am-7pm
  for (let i = 0; i < hours.length; i++) {
    let timeStamp = document.createElement('th');
    timeStamp.textContent = hours[i];
    headerRow.appendChild(timeStamp);
  }

  // created 'Total' cell
  let thTotalCell = document.createElement('th');
  thTotalCell.textContent = 'Total';
  headerRow.appendChild(thTotalCell);
};

hoursOfOperation();



// Prototype Functions for the cities
City.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(random(this.minCust, this.maxCust));
  }
};

City.prototype.getCookiesPerHour = function () {
  this.getCustomersPerHour();
  for (let i = 0; i < hours.length; i++) {
    let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(hour1);
    this.totalCookies += hour1;
  }
};

City.prototype.renderTrElements = function () {
  this.getCookiesPerHour();
  let cityRowEl = document.createElement('tr');
  tableEl.appendChild(cityRowEl);

  let cityRowHeadingEl = document.createElement('th');
  cityRowHeadingEl.textContent = this.location;
  cityRowEl.appendChild(cityRowHeadingEl);

  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour[i];
    cityRowEl.appendChild(tdElement);
  }

  let totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.totalCookies;
  cityRowEl.appendChild(totalTdEl);

};

// Calling each added city from the constructor
let seattle = new City('Seattle', 23, 65, 6.3);
// seattle.renderTrElements();
let tokyo = new City('Tokyo', 3, 24, 6.3);
// tokyo.renderTrElements();
let dubai = new City('Dubai', 11, 38, 3.7);
// dubai.renderTrElements();
let paris = new City('Paris', 20, 38, 2.3);
// paris.renderTrElements();
let lima = new City('Lima', 2, 16, 4.6);
// lima.renderTrElements();

function renderAllStores () {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].renderTrElements();
  }
}
renderAllStores();

// Footer row

let footerCells = function () {

  // empty cell before 6am total
  let footerRow = document.createElement('tr');
  tableEl.appendChild(footerRow);

  let tfootCell = document.createElement('th');
  tfootCell.textContent = "Total";
  footerRow.appendChild(tfootCell);

  // 6am-total total
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesPerHour[i];
      grandTotal += allStores[j].cookiesPerHour[i];
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    footerRow.appendChild(tdElement);

  }

    // Grand total
  let grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = grandTotal;
  footerRow.appendChild(grandTotalTd);
};

// Calling Footer Row
console.log(allStores);
footerCells();






let addNewLocation = document.getElementById('new-location-form');

let newLocData = function (event) {
  event.preventDefault();
  let newCity = new City(event.target.locName.value, parseInt(event.target.minInput.value), parseInt(event.target.maxInput.value), parseInt(event.target.salesInput.value));
  console.log(allStores);
  newCity.getCustomersPerHour();
  newCity.getCookiesPerHour();
  tableEl.innerHTML = '';


  hoursOfOperation();
  renderAllStores();
  footerCells();

};

addNewLocation.addEventListener('submit', newLocData);







// seattle.getCustomersPerHour();
// tokyo.getCustomersPerHour();
// dubai.getCustomersPerHour();
// paris.getCustomersPerHour();
// lima.getCustomersPerHour();

// TOKYO BELOW:

// let tokyo = {
//     location: 'Toyko',
//     minCust: 3,
//     maxCust: 24,
//     avgSale: 1.2,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustomersPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//         this.customersPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustomersPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let tokyoList = document.getElementById('tokyo');
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             tokyoList.appendChild(liElement);
//         }

//         let liElement = document.createElement('li');
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         tokyoList.appendChild(liElement);
//     },

// };

// tokyo.render();
// console.log(tokyo.cookiesPerHour);

// let tokyoElement = document.getElementById('tokyoH2');
// let h2Element2 = document.createElement('h2');
// h2Element2.textContent = tokyo.location;
// tokyoElement.appendChild(h2Element2);

// // DUBAI BELOW:

// let dubai = {
//     location: "Dubai",
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustomersPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//         this.customersPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustomersPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let dubaiList = document.getElementById('dubai');
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             dubaiList.appendChild(liElement);
//         }

//         let liElement = document.createElement('li');
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         dubaiList.appendChild(liElement);
//     },
// };

// dubai.render();
// console.log(dubai.cookiesPerHour);

// let dubaiElement = document.getElementById('dubaiH2');
// let h2Element3 = document.createElement('h2');
// h2Element3.textContent = dubai.location;
// dubaiElement.appendChild(h2Element3);

// // PARIS BELOW:

// let paris = {
//     location: "Paris",
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustomersPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//         this.customersPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustomersPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let parisList = document.getElementById('paris');
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             parisList.appendChild(liElement);
//         }

//         let liElement = document.createElement('li');
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         parisList.appendChild(liElement);
//     },
// }

// paris.render();
// console.log(paris.cookiesPerHour);

// let parisElement = document.getElementById('parisH2');
// let h2Element4 = document.createElement('h2');
// h2Element4.textContent = paris.location;
// parisElement.appendChild(h2Element4);

// // LIMA BELOW:

// let lima = {
//     location: "Lima",
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustomersPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//         this.customersPerHour.push(random(this.minCust, this.maxCust));
//         }
//     },

//     getCookiesPerHour: function () {
//         this.getCustomersPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
//             this.cookiesPerHour.push(hour1);
//             this.totalCookies += hour1;
//         }
//     },

//     render: function () {
//         this.getCookiesPerHour()
//         let limaList = document.getElementById('lima');
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
//             limaList.appendChild(liElement);
//         }

//         let liElement = document.createElement('li');
//         liElement.textContent = `Total: ${this.totalCookies} cookies.`;
//         limaList.appendChild(liElement);
//     },
// }

// lima.render();
// console.log(lima.cookiesPerHour);

// let limaElement = document.getElementById('limaH2');
// let h2Element5 = document.createElement('h2');
// h2Element5.textContent = lima.location;
// limaElement.appendChild(h2Element5);