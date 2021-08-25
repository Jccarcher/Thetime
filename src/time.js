//variables
const express = require('express');
const app = express();
//package
const m = require('moment');
const tz = require('moment-timezone');

var timezone = m.tz.guess(); //pedir la zona horaria 
var currentDate = m(); //pedir la fecha actual
var futureMonth = m(currentDate).add(1, 'M'); //pedir la fecha futura 
var backMonth = m(currentDate).add(-1,'M')
var futureMonthEnd = m(futureMonth).endOf('month');

if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
}

console.log("Tiempo Actual",currentDate); //imprimo la fecha actual 
console.log("Mes Futuro",futureMonth); //imprimo la fecha futura 
console.log("Time zone", timezone); //imprimo la zona horaria
