let prompt = require("prompt-sync")();

let distance_km = prompt("Enter distance in km ",0);
    distance_km = parseFloat(distance_km);

let distance_mile = distance_km * 5/8;
console.log(distance_mile);


/* Defining Table

input:- Distance in km from the user

process:- calculate the distance in mile

output:- display or save to database the distance in miles.

*/