// try statement defines a code block to run(to try).
// catch statement defines a code block to handle any error.
// finally statement defines a code block to run regardless of the result.
// throw statement defines a custom error.

// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

try {
    consol.log("Sanket Talaviya"); // we forgot to add 'e' in console
}
catch(error) {
    console.log(error.message); // error in above statement will be displayed here
}

try {
    conole(a, b);
}
catch {
    console.log("Yay! Something error happened!");
}

console.log(); // just for line-break

try {
    console.log("I am Inevitable!"); // if no error, the statement will be executed
}
catch(err) {
    console.log(err.message);
}

console.log(); // just for line-break

// JavaScript statements try and catch come in pairs
// try statement allows you to define a block of code to be tested for errors while it is being executed.
// catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// throw statement allows you to create a custom error.

// finally statement lets you execute code, after try and catch, regardless of the result

// name property sets or returns an error name

try {
    consoe.log("ABCD");
}
catch(err) {
    console.log(err.name);
}

// message property sets or returns an error message (a string)

try {
    console.og("XYZ");
}
catch(sanket) {
    console.log(sanket.message);
}

console.log(); // just for line-break

let num = 12;

try {
    num.toUpperCase();
}
catch(robert) {
    console.log("Tada! I'm here");
    console.log(robert.name);   
}