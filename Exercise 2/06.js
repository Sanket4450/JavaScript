// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function addChar(string) {
    let firstChar = string[0];
    return firstChar + string + firstChar;
}

console.log(addChar("Sanket"));
console.log(addChar("india"))
console.log(addChar("africa"));