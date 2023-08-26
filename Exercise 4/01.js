// Write a JavaScript program to convert a given number into hours and minutes.

function toHoursMinutes(number) {
    let hours = Math.floor(number / 60);
    let minutes = number % 60;

    return hours + " Hours & " + minutes + " Minutes";
}

console.log(toHoursMinutes(425));
console.log(toHoursMinutes(34));
console.log(toHoursMinutes(923));
console.log(toHoursMinutes(60));
console.log(toHoursMinutes(180));