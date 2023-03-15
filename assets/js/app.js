
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SEATTLE BELOW:

let seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    getCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustomersPerHour();
        for (let i = 0; i < hours.length; i++) {
            let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.totalCookies += hour1;
        }
    },

    renderLiElements: function () {
        this.getCookiesPerHour()
        let seattleList = document.getElementById('seattleList');
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            seattleList.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.totalCookies} cookies.`;
        seattleList.appendChild(liElement);
    },

};

// // target parent element
// // create element and give it content
// // append to parent

// // Seattle
seattle.renderLiElements();
console.log(seattle.cookiesPerHour);

// H2 element called outside
let seattleElement = document.getElementById('seaH2');
let h2Element1 = document.createElement('h2');
h2Element1.textContent = seattle.location;
seattleElement.appendChild(h2Element1);

// TOKYO BELOW:

let tokyo = {
    location: 'Toyko',
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    getCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustomersPerHour();
        for (let i = 0; i < hours.length; i++) {
            let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.totalCookies += hour1;
        }
    },

    render: function () {
        this.getCookiesPerHour()
        let tokyoList = document.getElementById('tokyo');
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            tokyoList.appendChild(liElement);
        }
    
        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.totalCookies} cookies.`;
        tokyoList.appendChild(liElement);
    },

};

tokyo.render();
console.log(tokyo.cookiesPerHour);

let tokyoElement = document.getElementById('tokyoH2');
let h2Element2 = document.createElement('h2');
h2Element2.textContent = tokyo.location;
tokyoElement.appendChild(h2Element2);

// // DUBAI BELOW:

let dubai = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    getCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustomersPerHour();
        for (let i = 0; i < hours.length; i++) {
            let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.totalCookies += hour1;
        }
    },

    render: function () {
        this.getCookiesPerHour()
        let dubaiList = document.getElementById('dubai');
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            dubaiList.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.totalCookies} cookies.`;
        dubaiList.appendChild(liElement);
    },
};

dubai.render();
console.log(dubai.cookiesPerHour);

let dubaiElement = document.getElementById('dubaiH2');
let h2Element3 = document.createElement('h2');
h2Element3.textContent = dubai.location;
dubaiElement.appendChild(h2Element3);

// // PARIS BELOW:

let paris = {
    location: "Paris",
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    getCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustomersPerHour();
        for (let i = 0; i < hours.length; i++) {
            let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.totalCookies += hour1;
        }
    },

    render: function () {
        this.getCookiesPerHour()
        let parisList = document.getElementById('paris');
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            parisList.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.totalCookies} cookies.`;
        parisList.appendChild(liElement);
    },
}

paris.render();
console.log(paris.cookiesPerHour);

let parisElement = document.getElementById('parisH2');
let h2Element4 = document.createElement('h2');
h2Element4.textContent = paris.location;
parisElement.appendChild(h2Element4);

// // LIMA BELOW:

let lima = {
    location: "Lima",
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    getCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCust, this.maxCust));
        }
    },

    getCookiesPerHour: function () {
        this.getCustomersPerHour();
        for (let i = 0; i < hours.length; i++) {
            let hour1 = Math.ceil(this.customersPerHour[i] * this.avgSale);
            this.cookiesPerHour.push(hour1);
            this.totalCookies += hour1;
        }
    },

    render: function () {
        this.getCookiesPerHour()
        let limaList = document.getElementById('lima');
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
            limaList.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent = `Total: ${this.totalCookies} cookies.`;
        limaList.appendChild(liElement);
    },
}

lima.render();
console.log(lima.cookiesPerHour);

let limaElement = document.getElementById('limaH2');
let h2Element5 = document.createElement('h2');
h2Element5.textContent = lima.location;
limaElement.appendChild(h2Element5);
