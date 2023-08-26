/* Write a JavaScript program to create another string by adding "Py" in front of a given string.
If the given string begins with "Py" return the original string. */

function addString(string) {
    if (string[0] == "P" && string[1] == "y") {
        return string;
    }
    else {
        return "Py".concat(string);
    }
}

console.log(addString("Sanket"));
console.log(addString("Python")); // won't add Py as word begins with "Py"
console.log(addString("pyros")); // adds "Py" as it is case-sensitive
console.log(addString("PYjama")); // adds "Py" as it is case-sensitive