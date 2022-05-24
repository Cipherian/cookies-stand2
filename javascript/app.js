"use strict";

function City(storeLocation, minCustomers, maxCustomers, averageCookieSale) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
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
let city1 = new City("Seattle", 23, 65, 6.3);
let city2 = new City("Tokyo", 3, 24, 1.2);
let city3 = new City("Dubai", 11, 38, 3.7);
let city4 = new City("Paris", 20, 38, 2.3);
let city5 = new City("Lima", 2, 16, 4.6);
console.log(city1);
console.log(city3);
console.log(this.storeLocation)
let cities = [city1, city2, city3, city4, city5];

City.prototype.tableHead = function () {
  let elemHead = document.getElementById("thead");
  let rowElem = document.createElement("tr");
  let storeLocation = document.createElement("td");
  for (let i = 0; i < cities.length; i++) {
    storeLocation.innerText = this.storeLocation;
    rowElem.appendChild(storeLocation);
  }
  elemHead.appendChild(rowElem);
};
function renderHour() {
  let elemBody = document.getElementById("tbody");
  let rowElem = document.createElement("tr");
  for (let i = 0; i < storeHours.length; i++) {
    let storeHour = storeHours[i];
    let dataElem = document.createElement('td');
    dataElem.innerText = storeHour;
    rowElem.appendChild(dataElem)
  }
  elemBody.appendChild(rowElem);
}
function renderFooter() {
}
City.prototype.tableBody = function () {
  let elemBody = document.getElementById("tbody2");
  let rowElem = document.createElement("tr");

  for (let j = 0; j < storeHours.length; j++) {
    let randomCustomers = Math.round(
    this.minCustomers +
        Math.random() * (this.maxCustomers - this.minCustomers)
    );
    let cookiesSold = Math.round(randomCustomers * this.averageCookieSale);
    let dataElem = document.createElement("td");
    // console.log(cookiesSold)
    // console.log(randomCustomers)
    dataElem.innerText = cookiesSold;
    rowElem.appendChild(dataElem);
  }
  elemBody.appendChild(rowElem);
};

renderHour();

for (let i = 0; i < cities.length; i++) {
  let cit = cities[i];
  cit.tableBody();
}

for (let i = 0; i < cities.length; i++) {
  let cit = cities[i];
  cit.tableHead();
}