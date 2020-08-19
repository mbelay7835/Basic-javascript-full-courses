let prompt = require("prompt-sync")();

let beginingOdom = parseFloat(prompt("Eneter begin odometer ", 0));                         
let endingOdom = parseFloat(prompt("Eneter end odometer ", 0));
let gasUsed = parseFloat(prompt("Eneter galons of gasoline used ", 0));

let mileage_Per_galon = (endingOdom - beginingOdom)/gasUsed;

console.log(mileage_Per_galon + " miles/galon");


/* Defining Table

input:- Input begining ododmeter from the user.
        Input ending ododmeter from the user.
        Input gas used from the user.

process:- calculate mileage per galon.

output:- Display or save to database the mileage per galon.

*/