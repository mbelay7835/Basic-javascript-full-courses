let prompt = require("prompt-sync")();

let tax_rate = 15/100
let hours_worked = parseFloat(prompt("Enter hours you worked ", 0));
let wage = parseFloat(prompt("Enter hourly wage ", 0));

let gross_pay = hours_worked * wage;
let tax = gross_pay * tax_rate;

let net_pay = gross_pay - tax;
console.log(net_pay);



/* Defining Table

input:- Input hours you worked from the user.
        Input hourly wage from the user.

process:- calculate the gross pay by multiplying hours worked by wages.
          calculate tax by multiplying gross pay by tax rate.
          Subtract tax from gross pay to get net pay

output:- Display or save to database the net pay.

*/