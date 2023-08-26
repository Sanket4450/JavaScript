/* Write a JavaScript program to check a pair of numbers and return true
if one of the numbers is 50 or if their sum is 50. */

function checkPair(x, y) {
    if (x == 50 || y == 50 || x + y == 50) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkPair(24, 51)); // no one is 50
console.log(checkPair(50, 22)); // minimum one is 50
console.log(checkPair(19, 31)); // sum is 50
console.log(checkPair(50, 50)); // minimum one is 50