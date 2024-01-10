/*
Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
*/
let temprature = 40
let weather = null
weather = (temprature > 30) ? "Hot" : "Moderate"
console.log(`Weather condition : ${weather}`)