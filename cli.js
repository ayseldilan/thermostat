const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat.js");

const thermostat = new Thermostat();
console.log(`Temperature is ${thermostat.getTemperature()}`)

while (true) {
    let command = readlineSync.question("Enter your command > ");
      if(command === "up"){
        thermostat.up();
        console.log(`Temperature is ${thermostat.getTemperature()}`);
      }
      else if(command === "down") { 
        thermostat.down();   
        console.log(`Temperature is ${thermostat.getTemperature()}`);     
      } 
      else if (command === 'psm on'){
        thermostat.setPowerSavingMode(true);
        console.log(`Temperature is ${thermostat.getTemperature()}`);
      } 
      else if(command === 'psm off') {
        thermostat.setPowerSavingMode(false);
        console.log(`Temperature is ${thermostat.getTemperature()}`);
      }
      else if (command === 'quit' & command === 'exit' ) {
          break;
      }
}; 