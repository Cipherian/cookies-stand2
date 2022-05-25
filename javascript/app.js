"use strict";

function City(storeLocation, minCustomers, maxCustomers, averageCookieSale) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.cookiesSale = [];
  this.cookieTotal = [];
}
let storeHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
let storeLocationNames = [
  'Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'
]
let city1 = new City("Seattle", 23, 65, 6.3);
let city2 = new City("Tokyo", 3, 24, 1.2);
let city3 = new City("Dubai", 11, 38, 3.7);
let city4 = new City("Paris", 20, 38, 2.3);
let city5 = new City("Lima", 2, 16, 4.6);
console.log(city1);
console.log(city3);
let cities = [city1, city2, city3, city4, city5];

function sumArray (array){
  let sum = 0;
  array.forEach(item => {
    sum += item;
  });
  return sum;
}

function renderHour() {
  let elemBody = document.getElementById("tbody");
  let rowElem = document.createElement("tr");
  let blankElem = document.createElement('td');
  blankElem.innerText = "Location";
  rowElem.appendChild(blankElem);
  for (let i = 0; i < storeHours.length; i++) {
    let storeHour = storeHours[i];
    let dataElem = document.createElement('td');
    dataElem.innerText = storeHour;
    rowElem.appendChild(dataElem)
  }
  let endElem = document.createElement('td');
  endElem.innerText = "Hourly Total";
  rowElem.appendChild(endElem);
  elemBody.appendChild(rowElem);
}

City.prototype.tableBody = function () {
  let elemBody = document.getElementById("tbody2");
  let rowElem = document.createElement("tr");
  let citiesElem = document.createElement("td");
  
  for (let i = 0; i < this.storeLocation.length; i++) {
    citiesElem.innerText = this.storeLocation;
    rowElem.appendChild(citiesElem);
  }
  for (let j = 0; j < storeHours.length; j++) {
    let randomCustomers = Math.round(
      this.minCustomers +
          Math.random() * (this.maxCustomers - this.minCustomers)
      );
      let cookiesSold = Math.round(randomCustomers * this.averageCookieSale);
    this.cookiesSale.push(cookiesSold);
    let dataElem = document.createElement("td");
    dataElem.innerText = cookiesSold;
    rowElem.appendChild(dataElem);
  }
  let locationTotal = document.createElement('td');
  locationTotal.innerText = sumArray(this.cookiesSale);
  rowElem.appendChild(locationTotal);   
  elemBody.appendChild(rowElem);
};
// function renderFooter() {
//   const tableRow = document.createElement('tr');
//   let tableHeader.textContent = "Hour totals for all location";
//   tableRow.appendChild(tableHeader);
//   let totalOfTotals = 0;
//   for (let i = 0; i < storeHours.length; i++)
// }
// console.log(cookieSale)

renderHour();

for (let i = 0; i < cities.length; i++) {
  let cit = cities[i];
  cit.tableBody();
}
