// Write a JavaScript program to convert letters of a given string alphabetically.

function setAlpha(string) {
    return string.split("").sort().join("");
}

console.log(setAlpha("sanket"));
console.log(setAlpha("SANKET"));