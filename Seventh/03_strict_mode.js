// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

"use strict"; // we indicated that the code should be executed in strict mode
x = 12; // this will through error because x is not defined

myFunction();
function myFunction(){
    y = 10; // this will also cause an error because y is not defined
}

// Declared inside a function, it has local scope(only the code inside the function is in strict mode)

function myFunction1(){
    "use strict";
    z = 12; // this will also cause an error because z is not defined
}

// Using a variable, without declaring it, is not allowed

// Using an object, without declaring it, is not allowed

// Deleting a variable(or object) is not allowed.

// Deleting a function is not allowed.

// Duplicating a parameter name in function is not allowed

// Octal numeric literals are not allowed

// Octal escape characters are not allowed

// Writing to a read - only property is not allowed

// Writing to a get - only property is not allowed

// Deleting an undeletable property is not allowed

// word eval cannot be used as a variable

// arguments cannot be used as a variable

// with statement is not allowed

// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

// declaring variables with let is not allowed