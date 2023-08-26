// Always use the same coding conventions for all your JavaScript projects.

// Coding conventions are style guidelines for programming.

/* Coding conventions secure quality:

Improve code readability
Make code maintenance easier */


// we use camelCase for identifier names(variables and functions).

firstName = "Sanket";
lastName = "Talaviya";

fullName = firstName + " " + lastName;

// Always put spaces around operators( = + - * / ), and after commas

let x = 12 + 24 / 8 * 3;

const myArray = ["Oggy", "Jack", "Bob"];

// Always use 2 spaces or tab(if by default) for indentation of code blocks

function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Always end a simple statement with a semicolon.

let name = "Sanket Talaviya";
const myArray1 = ["Japlu", "Taplu", "Paplu"];

/* Put the opening bracket at the end of the first line.
Use one space before the opening bracket.
Put the closing bracket on a new line, without leading spaces.
Do not end a complex statement with a semicolon. */

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

for (let i = 0; i < 5; i++) {
    x += i;
}

let time = 16;

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

/* Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property - value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon. */

const person = {
    firstName: "Sanket",
    lastName: "Talaviya",
    age: 17,
    height: 165
};

// Short objects can be written compressed, on one line, using spaces only between properties

const person1 = {firstName:"Sanket", lastName:"Talaviya", age:17, height:165};

/* If a JavaScript statement does not fit on one line, the best place to break it,
is after an operator or a comma. */

let a = "You were the shadow to my light, did you feel us? another star you fade away!";
let b = "You were the shadow to my light, did you feel us? another star you fade away! \
afraid our aim is outside,";

// HTML & CSS uses hyphens in property-names (font-size).
// Hyphens can be mistaken as subtraction attempts.Hyphens are not allowed in JavaScript names.
// Many programmers prefer to use underscores(date_of_birth), especially in SQL databases.
// PascalCase is often preferred by C programmers.
// camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.
// Do not start names with a $ sign.It will put you in conflict with many JavaScript library names.

/* HTML files should have a.html extension(.htm is allowed), CSS files should have a.css extension.
JavaScript files should have a.js extension. */

/* Most web servers(Apache, Unix) are case sensitive about file names, To avoid these problems,
always use lower case file names (if possible). */

// Minimize the use of global variables.
// All variables used in a function should be declared as local variables.\

// It is a good coding practice to put all declarations at the top of each script or function.

let firstName1, lastName1, price1, discount1, fullPrice1;

firstName1 = "Sanket";
lastName1 = "Talaviya";

price1 = 100;
discount1 = 20;

fullPrice1 = price1 - discount1;

// It is a good coding practice to initialize variables when you declare them.

let myName = "Sanket";
let myAge = 17;
let myArray2 = [];
let myFunction = () => {};

// Declaring objects with const will prevent any accidental change of type

let car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat";      // Changes object to string

const car1 = { type: "Fiat", model: "500", color: "white" };
// car1 = "Fiat";  Not possible

/* Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use { } instead of new Object()
Use[] instead of new Array()
Use / () / instead of new RegExp()
Use function () {} instead of new Function() */

// JavaScript is loosely typed, A variable can contain all data types & also change its data type

let s = "Hello";     // typeof s is a string
s = 5;               // changes typeof s to a number

// Beware that numbers can accidentally be converted to strings or NaN(Not a Number).

let h = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let i = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let j = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let k = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let l = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let m = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let n = 5 - "x";     // x.valueOf() is NaN, typeof x is a number

// Subtracting a string from a string, does not generate an error but returns NaN(Not a Number)

"Iron Man" - "Captain America";  // returns NaN

/* == comparison operator always converts(to matching types) before comparison, The === operator forces
comparison of values and type */

0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

// If a function is called with a missing argument, the value of the missing argument is set to undefined.

// Always end your switch statements with a default. Even if you think there is no need for it.

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown";
}

// Avoid Number, String, and Boolean as Objects

// Declaring these types as objects, slows down execution speed, and produces nasty side effects

let p = "John";
let r = new String("John");
(p === r) // is false because x is a string and y is an object.

let v = new String("Alexander");
let w = new String("Alexander");
(v == w) // is false because you cannot compare objects.

// eval() function is used to run text as code.In almost all cases, it should not be necessary to use it.