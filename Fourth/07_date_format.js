// 3 types of JavaScript date input formats

// ISO Date, Short Date, Long Date

/* The computed date will be relative to your time zone, Depending on your time zone, the result above will
vary between March 24 and March 25. */

// ISO dates can be written without specifying the day(YYYY - MM)
const a = new Date("2018-04");
console.log(a);

// ISO dates can be written without month and day(YYYY)

const b = new Date("2020");
console.log(b);

// Time zones will vary the result above between December 31 2014 and January 01 2015.

// ISO dates can be written with added hours, minutes, and seconds(YYYY - MM - DDTHH: MM: SSZ)

const c = new Date("2016-02-23T12:20:25Z");
console.log(c);

// Date and time is separated with a capital T.

// UTC time is defined with a capital letter Z.

// Short dates are written with an "MM/DD/YYYY" syntax like this

const d = new Date("02/23/2016"); // 0 is mendatory
console.log(d);

// Long dates are most often written with a "MMM DD YYYY" syntax like this

const e = new Date("Apr 24 2006");
console.log(e);

// Month and day can be in any order

const f = new Date("17 Sep 2014");
console.log(f);

// month can be written in full(January), or abbreviated(Jan)

const g = new Date("25 December 2016");
console.log(g);

// Commas are ignored.Names are case insensitive

const h = new Date("17, FEBRUARY, 2017");
console.log(h);

const i = Date.parse("17, FEBRUARY, 2017");
console.log(i);

// You can then use the number of milliseconds to convert it to a date object

const j = new Date(i);
console.log(j);

// we can print time as a string by adding toString();

const time = new Date();

const _time = time.toString();
console.log(_time);

// By adding toDateString(), it only prints the date only & not time

const __time = time.toDateString();
console.log(__time);