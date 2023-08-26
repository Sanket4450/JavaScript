// Write a JavaScript program to check two given non - negative integers if one (not both) is a multiple of 7 or 11.

function isMultiple(x, y) {
    if ((x % 7 === 0 || x % 11 === 0) && x >= 0 || (y % 7 === 0 || y % 11 === 0) && y >= 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isMultiple(12, 33));
console.log(isMultiple(14, 41));
console.log(isMultiple(17, 50));
console.log(isMultiple(-21, 19));
console.log(isMultiple(12, 0));