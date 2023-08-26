// Write a JavaScript program to create a new string without the first and last characters of a given string.

function withoutFirstLast(string) {
    let str = "";
    for (let i = 1; i < string.length - 1; i++) {
        str += string[i];
    }
    return str;
}

console.log(withoutFirstLast("Sanket"));
console.log(withoutFirstLast1("Sanket")); // calling second function

console.log(withoutFirstLast("Australia"));
console.log(withoutFirstLast1("Australia")); // calling second function

// another way (more simpler)
function withoutFirstLast1(string) {
    return string.substring(1, string.length - 1);
}