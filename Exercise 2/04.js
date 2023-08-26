/* Write a JavaScript program to remove a character at the specified position in a given string
and return the modified string. */

function removeChar(string, i) {
    part1 = string.substring(0, i);
    part2 = string.substring(i + 1, string.length);
    return part1 + part2;
}

console.log(removeChar("Sanket", 3)); // removes position 3 "k"
console.log(removeChar("Australia", 0));
console.log(removeChar("New World", 3));
console.log(removeChar("India", 7)); // returns as it is because position is higher than the whole string