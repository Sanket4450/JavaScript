// Comparison and Logical operators are used to test for true or false.

let x = 5;

// equal to operator

console.log(x == 5); // true
console.log(x == 8); // false
console.log(x == "5"); // true

// equal value and equal type operator

console.log(x === 5); // true
console.log(x === "5"); // false

// not equal operator

console.log(x != 8); // true
console.log(x != 5); // false

// not equal value or not equal type operator

console.log(x !== 5); // false
console.log(x !== "5"); // true
console.log(x !== 8); // true
console.log(x !== "8"); // true

// greater than operator

console.log(x > 3); // true
console.log(x > 8); // false
console.log(x > 5); // false

// greater than or equal to operator

console.log(x >= 3); // true
console.log(x >= 8); // false
console.log(x >= 5); // true

// less than operator

console.log(x < 3); // false
console.log(x < 8); // true
console.log(x < 5); // false

// less than or equal to operator

console.log(x <= 3); // false
console.log(x <= 8); // true
console.log(x <= 5); // true

/* Comparison operators can be used in conditional statements to compare values and take action depending on
the result */

// Logical operators are used to determine the logic between variables or values.

/* JavaScript also contains a conditional (ternary) operator that assigns a value to a variable based on
some condition. */

// Comparing data of different types may give unexpected results.

console.log(2 < 15); // true
console.log(2 < "15"); // true
console.log(2 < "Sanket"); // false
console.log(2 > "Sanket"); // false
console.log(2 == "Sanket"); // false
console.log("2" < "15"); // false
console.log("2" > "15"); // true
console.log("2" == "15"); // false

// When comparing two strings, "2" will be greater than "15", because (alphabetically) 1 is less than 2.

// ?? operator returns the first argument if it is not nullish(null or undefined).

// ?. operator returns undefined if an object is undefined or null(instead of throwing an error).