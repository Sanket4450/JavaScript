// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(309));
console.log(isLeapYear(2020));
console.log(isLeapYear(1994));
console.log(isLeapYear(2008));
console.log(isLeapYear(1800));
console.log(isLeapYear(1700));