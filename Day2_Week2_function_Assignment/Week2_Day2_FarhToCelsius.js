'use strict';

const prompt = require("prompt-sync")();
/*
Input: Temperature in fahrenheit.
Process: convert Temperature in fahrenheit in to temperature in celsius .
output: A message stating temperature in degree celsius.
*/
function celsius() {
    let fahrenheit = prompt("Enter temperature in fahrenheit ");
    fahrenheit = parseFloat(fahrenheit);

    let degre_celsius = farhToCels(fahrenheit);

    console.log(degre_celsius);
}


function farhToCels(f) {
    let degree_celsius = (f - 32) * 5 / 9;
    return degree_celsius;
}

celsius()