// Write a JavaScript program to capitalize the first letter of each word in a given sentence string.  

function capitalFirst(string) {
    string = string.split(" ");

    for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }
    return string.join(" ");
}

console.log(capitalFirst("Sanket talaviya")); // capital first letter of each word
console.log(capitalFirst("My name is KHAN"));
console.log(capitalFirst("s A nk eT"));