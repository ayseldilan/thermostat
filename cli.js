const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat.js");

const thermostat = new Thermostat();
console.log(`Temperature is ${thermostat.getTemperature()}`)