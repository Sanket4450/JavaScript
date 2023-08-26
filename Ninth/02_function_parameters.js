// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.

// If a function is called with missing arguments (less than declared), the missing values are set to undefined.

function myFunction1(x, y) {
    if (y === undefined) { // missing argument is set to undefined
        y = 3;
    }
    return x * y;
}

console.log(myFunction1(5)); // second argument is missing so it is set to 3

// function parameters to have default values.

function myFunction2(x, y = 12) { // if y is not defined, it is set to 12
    return x + y;
}

console.log(myFunction2(20)); // y is set to 12

// rest parameter(...) allows a function to treat an indefinite number of arguments as an array

function sum(...numbers) {
    let sum = 0;
    for (let x of numbers) {
        sum += x;
    }
    return sum;
}

let x = sum(1, 2, 3, 4, 5); // allows indefinite number of arguments
console.log(x);

let y = sum(12, 33, 58, 7, 19, 183, 50, 320, 137);
console.log(y);