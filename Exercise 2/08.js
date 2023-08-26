/* Write a JavaScript program to check whether two given integer values are in the range 50..99(inclusive).
Return true if either of them falls within the range. */

function checkNumbers(x, y) {
    if (x >= 50 && x <= 99 || y >= 50 && y <= 99) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNumbers(58, 91)); // both are within the range
console.log(checkNumbers(12, 80)); // one of them is within the range
console.log(checkNumbers(109, 75)); // one of them is within the range
console.log(checkNumbers(34, 120)); // neither of them is within the range