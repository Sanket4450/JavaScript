// Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(string) {
    if (string.length % 2 == 0) {
        let firstHalf = string.slice(0, string.length / 2);
        
        return firstHalf;
    }
    else {
        return string;
    }
}

console.log(extractFirstHalf("Sanket"));
console.log(extractFirstHalf("Alexander"));
console.log(extractFirstHalf("Cillian Murphy"));