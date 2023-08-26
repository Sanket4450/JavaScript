/* Write a JavaScript program to produce a new string that has the first 3 characters in lower case
from a given string. If the string length is less than 3 convert all the characters to upper case. */

function convertString(string) {
    if (string.length < 3) {
        let newString = string.toUpperCase();

        return newString;
    }
    else {
        let first = string[0].toLowerCase();
        let second = string[1].toLowerCase();
        let third = string[2].toLowerCase();
        let remaining = string.slice(3);

        return first + second + third + remaining;
    }
}

console.log(convertString("Sanket"));
console.log(convertString("SANket"));
console.log(convertString("San"));
console.log(convertString("Sa"));
console.log(convertString("t"));