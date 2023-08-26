// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

let a = 5;
let b = 6;
let c = 7;

let perimeter = a + b + c;

let s = perimeter / 2;

let area = Math.sqrt(s * (s-a) * (s-b) * (s-c)).toFixed(2);

console.log("Area of the triangle is : " + area);