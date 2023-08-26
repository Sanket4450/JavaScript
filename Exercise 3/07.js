// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function checkNumbers(x, y) {
    if (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNumbers(15, 8));
console.log(checkNumbers(12, 15));
console.log(checkNumbers(6, 9));
console.log(checkNumbers(6, 21));
console.log(checkNumbers(15, 15));
console.log(checkNumbers(-15, 7));
console.log(checkNumbers(23, 18));