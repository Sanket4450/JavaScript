// The get methods return information from existing date objects.

// new Date() returns a date object with the current date and time.

const a = new Date();
console.log(a);

// In a date object, the time is static.The "clock" is not "running".

// The time in a date object is NOT the same as current time.

// getFullYear() method returns the year of a date as a four digit number

const b = new Date("2023-05-26T14:20:25Z");
let _b = b.getFullYear();
console.log(_b);

// getMonth() method returns the month of a date as a number(0 - 11).

let _c = b.getMonth();
console.log(_c);

// getDate() method returns the day of a date as a number(1 - 31)

let _d = b.getDate();
console.log(_d);

// getHours() method returns the hours of a date as a number(0 - 23)

let _e = b.getHours();
console.log(_e);

// getMinutes() method returns the minutes of a date as a number(0 - 59)

let _f = b.getMinutes();
console.log(_f);

// getSeconds() method returns the seconds of a date as a number(0 - 59)

let _g = b.getSeconds();
console.log(_g);

// getMilliseconds() method returns the milliseconds of a date as a number(0 - 999)

let _h = b.getMilliseconds();
console.log(_h);

// getDay() method returns the weekday of a date as a number(0 - 6).

let _i = b.getDay();
console.log(_i);

// getTime() method returns the number of milliseconds since January 1, 1970

let _j = b.getTime();
console.log(_j);

// Date.now() returns the number of milliseconds since January 1, 1970.

let _k = Date.now();
console.log(_k);

/* Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds)
for a Date Object. */

// setFullYear() method sets the year of a date object.

const l = new Date();
l.setFullYear(2014);
console.log(l.toString());

// setFullYear() method can optionally set month and day

const m = new Date();
m.setFullYear(2014, 9, 28);
console.log(m.toString());

// setMonth() method sets the month of a date object(0 - 11)

const n = new Date();
n.setMonth(2);
console.log(n.toString());

// setDate() method sets the day of a date object(1 - 31)

const o = new Date();
o.setDate(31);
console.log(o.toString());

// setHours() method sets the hours of a date object(0 - 23)

const p = new Date();
p.setHours(17);
console.log(p.toString());

// setMinutes() method sets the minutes of a date object(0 - 59)

const q = new Date();
q.setMinutes(27);
console.log(q.toString());

// setSeconds() method sets the seconds of a date object(0 - 59)

const r = new Date();
r.setSeconds(58);
console.log(r.toString());