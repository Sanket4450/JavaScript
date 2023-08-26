// Write a JavaScript program to display the current day and time in the following format.

let x = new Date();
let y;

const myArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (x.getHours < 12)
    y = "AM";
else y = "PM";

console.log("Today is : " + myArray[x.getDay()] + ".");
console.log("Current time is : " + x.getHours() + " " + y + " : " + x.getMinutes() + " : " + x.getSeconds());