// JavaScript Date Objects let us work with dates

// Date objects are static.The "clock" is not "running".

// By default, JavaScript will use the browser's time zone and display a date as a full text string

// Date objects are created with the new Date() constructor.

// new Date() creates a date object with the current date and time

// new Date()
const a = new Date();
console.log(a);

// new Date(date string)
const b = new Date("2023-04-24");
console.log(b);

// new Date(year, month)
const c = new Date(2019, 4); // JavaScript counts months from 0 to 11: January = 0, December = 11.
console.log(c);

// new Date(year, month, day)
const d = new Date(2019, 4, 12);
console.log(d);

// new Date(year, month, day, hours)
const e = new Date(2019, 4, 12, 21);
console.log(e);

// new Date(year, month, day, hours, minutes)
const f = new Date(2019, 4, 12, 21, 30);
console.log(f);

// new Date(year, month, day, hours, minutes, seconds)
const g = new Date(2019, 4, 12, 21, 30, 15);
console.log(g);

// new Date(year, month, day, hours, minutes, seconds, ms)
const h = new Date(2019, 4, 12, 21, 30, 15, 500);
console.log(h);

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

const i = new Date(2019, 8, 20);
console.log(i);

// One and two digit years will be interpreted as 19xx

const j = new Date(98, 10, 12);
console.log(j);

const k = new Date(8, 7, 23);
console.log(k);

// If you supply only one parameter it will be treated as milliseconds.

const l = new Date(2019);
console.log(l);