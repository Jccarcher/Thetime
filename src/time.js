//variables
const express = require('express');
const app = express();

//package
const m = require('moment');

var currentDate = m();
var futureMonth = m(currentDate).add(1, 'M');
var backMonth = m(currentDate).add(-1,'M')
var futureMonthEnd = m(futureMonth).endOf('month');

if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
}

if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(-1, 'd');
}

console.log("Tiempo Actual",currentDate);
console.log("Mes Futuro",futureMonth);
