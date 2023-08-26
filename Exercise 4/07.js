// Write a JavaScript program to concatenate two strings except for their first character.

function concatStrings(string1, string2) {
    let str1 = string1.substring(1, string1.length);
    let str2 = string2.substring(1, string2.length);

    return str1.concat(str2);
}

console.log(concatStrings("Robert", "Oppenheimer"));
console.log(concatStrings("Sanket ", "Talaviya"));