let prompt = require("prompt-sync")();

const value = 220;
let age = parseInt(prompt("Enter age "));

let max_heartrate_per_min = value - age;

// Recommended heart rate while exercising
let slowest_rate = max_heartrate_per_min * 65 / 100;
let fastest_rate = max_heartrate_per_min * 85 / 100;

let message = "The slowest and fastest rates necessary to strengthen your hearts are "+ 
              slowest_rate+ " and "+fastest_rate + " respectively";

console.log(message);



/* Defining Table

input:- Input age of a person from the user.

process:- calculate the recommended slowest heart rate while exercising.
          calculate the recommended fastest heart rate while exercising.

output:- Display or save to database the slowest and fastest heart rate of a person.

*/
