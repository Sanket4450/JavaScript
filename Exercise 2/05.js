/* Write a JavaScript program to create a new string from a given string by changing the position
of the first and last characters. The string length must be broader than or equal to 1. */

function changePosition(string) {
    if (string.length <= 1) {
        return string;
    }
    else {
        let mid = string.substring(1, string.length - 1);
        return string.charAt(string.length - 1) + mid + string.charAt(0);
    }
}

console.log(changePosition("Sanket"));
console.log(changePosition("world"));
console.log(changePosition("australia")); // out would be the same