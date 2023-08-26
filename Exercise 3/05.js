/* Write a JavaScript program to check from two given integers whether one of them is 8 or their sum
or difference is 8. */

function checkNumber(x, y) {
    let sum = x + y;
    let difference = Math.abs(x - y);

    if (x === 8 || y === 8 || sum === 8 || difference === 8) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNumber(7, 9));
console.log(checkNumber(5, 3));
console.log(checkNumber(8, 53));
console.log(checkNumber(15, 7));
console.log(checkNumber(3, 11));