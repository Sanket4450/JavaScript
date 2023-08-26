// Write a JavaScript program to count the number of vowels in a given string.

function countVowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" ||
            string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U") {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("Sanket"));
console.log(countVowels("Talaviya"));
console.log(countVowels("Apple"));
console.log(countVowels("AeiOu"));
console.log(countVowels("Oppenheimer"));