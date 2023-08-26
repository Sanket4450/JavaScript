/* JavaScript Logical operator allows us to compare variables or values. The logical operator is mostly used
to make decisions based on conditions specified for the statements. */

/* It reverses the boolean result of the operand(or condition). It first converts the operand to a boolean
type and then returns its flipped value. */

let a = 0;

console.log(!a); // true
console.log(!!a); // false
console.log(!!!a); // true

let b = 1;

console.log(!b); // false
console.log(!!b); // true
console.log(!!!b); // false

/* The && operator accepts multiple arguments and evaluates the operator from left to right.
It returns true only if all the operands that are evaluated are true */

let c = 10;
let d = 20;

console.log(c == 10 && d == 20); // true
console.log(c == 10 && d >= 10); // true
console.log(c == 10 && d == 10); // false
console.log(c == 20 && d > 20); // false

/* The 'OR' operator is somewhat opposite of the 'AND' operator. It also evaluates the operator from left to
right and returns true even if one operand is evaluated as true */

let e = 10;
let f = 20;

console.log(e == 10 || f == 20); // true
console.log(e == 10 || f >= 10); // true
console.log(e == 10 || f == 10); // true
console.log(e == 20 || f > 20); // false