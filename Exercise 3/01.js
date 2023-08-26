// Write a JavaScript program to find the closest value to 100 from two numerical values.

function closestHundred(x, y) {
    let a = Math.abs(x - 100);
    let b = Math.abs(y - 100);

    if (a <= b) {
        return x;
    }
    else {
        return y;
    }
}

console.log(closestHundred(80, 85));
console.log(closestHundred(29, 99));
console.log(closestHundred(100, 56));
console.log(closestHundred(104, 87));
console.log(closestHundred(90, 90));
console.log(closestHundred(-24, -60));