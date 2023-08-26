const allFunctions = require("./09_modules");

allFunctions.myFunction();
allFunctions.name("Chris", "Evans");
allFunctions.age(42);

console.log(); // just for line-break (a new line)

const {myFunction, name, age} = require("./09_modules");

name("Cillian", "Murphy");
age(47);

console.log();

name("Christian", "Bale");
age("49"); // here, the parameter is a numeric string