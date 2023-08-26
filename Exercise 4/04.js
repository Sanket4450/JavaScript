// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

function stringCopies(string, n) {
    if (n <= 0) {
        return false;
    }
    else {
        return string.repeat(n);
    }
}

console.log(stringCopies("Sanket", 4));
console.log(stringCopies("Sanket ", 4));
console.log(stringCopies(" SK Editz", 3));