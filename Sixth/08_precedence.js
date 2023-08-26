// Operator precedence describes the order in which operations are performed in an arithmetic expression.

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

let a = 14 + 6 * 4; // multiplication first then addition
console.log(a);

let b = (14 + 6) * 4; // inside parentheses first then outside
console.log(b);

let c = 24 / 8 * 3; // with the same precedence, computation is done from left to right
console.log(c);