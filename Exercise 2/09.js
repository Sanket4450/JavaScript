/* Write a JavaScript program to check whether three given integer values are in the range 50..99(inclusive).
Return true if one or more of them are in the specified range. */

function checkNumbers(x, y, z) {
    if (x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNumbers(78, 101, 29));
console.log(checkNumbers(506, 299, 101));
console.log(checkNumbers(50, 49, 51));
console.log(checkNumbers(900, 49, 17));