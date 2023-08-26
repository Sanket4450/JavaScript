function myFunction() {
    console.log("Sanket Talaviya");
}

function name(fname, lname) {
    console.log("Hello!", fname, lname);
}

function age(number) {
    console.log(`You are ${number} years old`); // used backticks (`) for string expression
}

module.exports = {myFunction, name, age}; // can export multiple functions with curly braces {}