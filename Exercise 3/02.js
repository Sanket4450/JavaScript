// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function charExist(string, char) {
    let exist = 0;
    for (let i = 2; i <= 4; i++) {
        if (string[i] == char) {
            exist = 1;
        }
    }
    if (exist == 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(charExist("Sanket", "n"));
console.log(charExist("New York", " ")); // space is also a letter of a string
console.log(charExist("Australia", "R")); // will not return true as it is case-sensitive