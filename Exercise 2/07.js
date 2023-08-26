// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function isMultiple(number) {
    if (number % 3 === 0 || number % 7 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isMultiple(12)); // multiple of 3
console.log(isMultiple(35)); // multiple of 7
console.log(isMultiple(42)); // multiple of both 3 & 7
console.log(isMultiple(29)); // multiple of neither 3 nor 7