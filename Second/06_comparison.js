/* JavaScript Comparison operators are mainly used to perform the logical operations that determine
the equality or difference between the values.Comparison operators are used in logical expressions to
determine their equality or differences in variables or values. */

/* This operator is used to compare the equality of two operands.If equal then the condition is true
otherwise false. */

let a = 10;
let b = '10';

console.log(a == 10); // true
console.log(b == 10); // true
console.log(a == b); // true

console.log(0 == false); // true
console.log(1 == true); // true
console.log(2 == true); // false

/* This operator is used to compare the inequality of two operands. If equal then the condition is false
otherwise true. */

let c = 10;
let d = '10';

console.log(c != 10); // false
console.log(d != 10); // false
console.log(c != d); // false

console.log(0 != false); // false
console.log(1 != true); // false
console.log(2 != true); // true

/* This operator is used to compare the equality of two operands with type.If both value and type are equal
then the condition is true otherwise false. */

let e = 10;
let f = '10';

console.log(e === 10); // true
console.log(e === '10'); // false
console.log(f === 10); // false
console.log(f === '10'); // true
console.log(e === f); // false

console.log(0 === false); // false
console.log(1 === true); // false
console.log(2 === true); // false

/* This operator is used to compare the inequality of two operands with type. If both value and type are not
equal then the condition is true otherwise false. */

let g = 10;
let h = '10';

console.log(g !== 10); // false
console.log(g !== '10'); // true
console.log(h !== 10); // true
console.log(h !== '10'); // false
console.log(g !== h); // true

console.log(0 !== false); // true
console.log(1 !== true); // true
console.log(2 !== true); // true

/* This operator is used to check whether the left - side value is greater than the right - side value.
If the value is greater then the condition is true otherwise false. */

let i = 10;
let j = '10';

console.log(i > 0); // true
console.log(i > "15"); // false
console.log(j > "15"); // false
console.log(j > 0); // true

/* This operator is used to check whether the left side operand is greater than or equal to the right side
operand. If the value is greater than or equal then the condition is true otherwise false. */

let k = 10;
let l = '10';

console.log(k >= 10); // true
console.log(k >= "10"); // true
console.log(k >= "15"); // false
console.log(l >= 10); // true
console.log(l >= "10"); // true
console.log(l >= "15"); // false

/* This operator is used to check whether the left - side value is less than the right - side value.
If yes then the condition is true otherwise false. */

let m = 10;
let n = '10';

console.log(m < 0); // false
console.log(m < "15"); // true
console.log(n < "15"); // true
console.log(n < 0); // false

/* This operator is used to check whether the left side operand value is less than or equal to the right side
operand value. If yes then the condition is true otherwise false. */

let o = 10;
let p = '10';

console.log(o <= 10); // true
console.log(o <= "10"); // true
console.log(o <= "5"); // false
console.log(p <= 10); // true
console.log(p <= "10"); // true
console.log(p <= "5"); // false