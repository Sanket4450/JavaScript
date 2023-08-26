// Template Literals use back - ticks(``) rather than the quotes("") to define a string

let text1 = `Sanket Talaviya`;
console.log(text1);

// With template literals, you can use both single and double quotes inside a string

let text2 = `My name is "Sanket" & surname is "Talaviya"`;
console.log(text2);

let text3 = `I am "Sanket" 'Talaviya'`;
console.log(text3);

// Template literals allows multiline strings

let text4 =
`I am learning
JavaScript Now,
Then I will
learn NodeJS`;
console.log(text4);

// Template literals provide an easy way to interpolate variables and expressions into strings.

let firstName = "Sanket";
let lastName = "Talaviya";

let text5 = `My name is ${firstName} ${lastName}`;
console.log(text5);

// Template literals allow expressions in strings

let pi = 3.14;
let r = 5;

let total = `Perimeter of Circle is ${(2 * pi * r).toFixed(2)}`;
// .toFixed(2) is used to show 2 digits after point
console.log(total);

