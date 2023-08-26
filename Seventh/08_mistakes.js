/* JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment
operator(=), instead of a comparison operator(==) in an if statement. */

import { push } from "../../FA Icons/js/v4-shims";

let x = 0;
console.log(Boolean(x == 10)); // false (as expected)

let y = 0;
console.log(Boolean(y = 10)); // true (maybe not as expected)

let z = 0;
console.log(Boolean(z = 0)); // false (maybe not as expected)

// An assignment always returns the value of the assignment, 0 = false, > 0 = true

// In regular comparison, data type does not matter, This if statement returns true

let a = 10;
let b = "10";

console.log(Boolean(a == b)); // true

// In strict comparison, data type does matter, This if statement returns false

console.log(Boolean(a === b)); // false

// It is a common mistake to forget that switch statements use strict comparison

let c = 10;
switch (c) {  // will print "Iron Man" as the case is a number
    case 10: console.log("Iron Man");
}

switch (c) {  // won't print "Captain America" as the case is a string & not a number
    case "10": console.log("Captain America");
}

// Addition is about adding numbers, Concatenation is about adding strings.

// In JavaScript both operations use the same + operator.

let d = 10;
let e = 5;
console.log(d + e); // 15 (numbers)

let f = 10;
let g = "5";
console.log(d + g); // 105 (concatenation)

// All programming languages, including JavaScript, have difficulties with precise floating point values

let h = 0.2;
let i = 0.1;
console.log(h + i);

// To solve the problem above, it helps to multiply and divide

let j = (0.2 * 10 + 0.1 * 10) / 10; // j will be 0.3
console.log(j);

// You must use a "backslash" if you must break a statement in a string

let k = "Hello \
World!";
console.log(k); // Hello World!

// Because of a misplaced semicolon, this code block will execute regardless of the value of x

let l = 10;
if (l == 15); {
    console.log("Sanket Talaviya"); // this is a normal block of code & not attached with if statement
}

// if you break the return statement in two lines

function myFunction() {
    return
    12 * 5; // can't be broken return statement, Never break a return statement.
}
let m = myFunction();
console.log(m);

// JavaScript does not support arrays with named indexes, Arrays use numbered indexes

const person = [];
person[0] = "Sanket";
person[1] = "Talaviya";
person[2] = 24;

// In JavaScript, objects use named indexes.

// If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.

const person1 = [];
person1["firstName"] = "Sanket";
person1["lastName"] = "Talaviya";
person1["age"] = 21;