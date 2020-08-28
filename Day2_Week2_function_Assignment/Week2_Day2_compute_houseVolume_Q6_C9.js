'use strict';

const prompt = require("prompt-sync")();

/*
Input: Width, depth, height and sweep of the house.
Process: Determine volume of the house.
output: Display the volume of the house.
*/
function getHouseVolume() {
    let width = parseFloat(prompt("Enter width of the house: "));
    let depth = parseFloat(prompt("Enter depth of the house: "));
    let height = parseFloat(prompt("Enter height of the house: "));
    let sweep = parseFloat(prompt("Enter sweep of the house: "));
    let house_volume = houseVolume(width, depth, height, sweep);

    console.log(house_volume);
}

//Compute and return volume of the house.
function houseVolume(width, depth, height, sweep) {
    let roof_v = roofVolume(width, depth, sweep);
    let living_v = livingVolume(width, depth, height);
    let house_v = roof_v + living_v;
    return house_v;
}

//Compute and return living volume.
function livingVolume(width, depth, height) {
    let living_volume = width * depth * height;
    return living_volume;
}

//Compute and return roof volume.
function roofVolume(width, depth, sweep) {
    let area_triangle = triangleArea(depth, sweep, sweep);
    let roof_volume = area_triangle * width;
    return roof_volume;
}

//Compute and return area of roof triangle.
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

getHouseVolume()