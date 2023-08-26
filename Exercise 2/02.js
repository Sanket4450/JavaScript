// Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function isPositiveNegative(x, y) {
    if (x > 0 && y < 0 || x < 0 && y > 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPositiveNegative(2, 8));   // both postive
console.log(isPositiveNegative(-2, 8));  // one positive, one negative
console.log(isPositiveNegative(2, -8));  // one positive, one negative
console.log(isPositiveNegative(-2, -8)); // both negative
console.log(isPositiveNegative(2, 0));   // one positive, one zero
console.log(isPositiveNegative(0, -8));  // one zero, one negative
console.log(isPositiveNegative(0, -0));  // both zeros