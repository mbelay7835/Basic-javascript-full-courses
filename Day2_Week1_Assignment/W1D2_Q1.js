let prompt = require("prompt-sync")();

let volume = prompt("Enter volume in quarts ");
    volume = parseFloat(volume);

let liters = volume / 1.057;

console.log(liters);


/* Defining Table

input:- volume in quarts from the user

process:- calculate the liters

output:- display or save to database the value of liters.

*/