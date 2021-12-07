# Building a Thermostat
- Working with Javascript for week 6 of Maker's Academy
- Building a simple program to manage a thermostat using test-driving code.
##Usage:
To test the thermostat:
1. Clone the resository and pull to your local machine.
2. Run the following command from the project directory:
npm install

# #Approach
1. I initally wrote a first test file named thermostat.test.js and wrote a simple unit test for the Thermostat class. I initalised a new instance of this class with a property temperature set to 20 using getTemperature method to recall in other locations. 
2. I then created a method that would allow me to increases the temperature by 2.
3. Next, I created the opposite method which decreased the temperature by 2.
4. Once this was done, power saving mode on (1 ms) was activated. 
5. Later on, you can go above previous max temp with power saving off for the next method.
6. I set limitations as to how low the temperature could go and decided that the tempetarue cannot go below 10 degrees
7. Finally, the thermostat could reset the temperature to 20.

# #User Stories
````
As a thermometer,
So that i can keep you warm,
I want the temperature to start at 20 degrees.
````
````
As a thermometer,
so that I can get even warmer,
I want you to increase the temperature with an up function.
````
````
As a thermometer,
so that I can get cooler,
I want you to decrease the temperature with a down function.
````
````

As a thermometer,
so that I can have a base temperature,
I want the minimum temperature to be 10 degrees.
````

````

As a thermometer,
so that if power saving mode is on,
the maximum temperature should be 25 degrees.
````

````
As a thermometer,
so that if power saving mode is off,
the minimum temperature should be 32 degrees.
````
````
As a thermometer, 
I want to see if the power saving mode is on by default,
but I also want to see that it can be turned off.
````
````
As a thermometer,
so that my initial temperature could be remembered,
I want to reset the temperature to 20 with a reset function.

````
