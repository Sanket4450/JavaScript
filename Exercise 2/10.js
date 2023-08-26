// Write a JavaScript program to find the largest of three given integers.

function largestof(x, y, z) {
    let largest = Math.max.apply(null, [x, y, z]);
    return largest;
}

console.log(largestof(12, 20, 6));
console.log(largestof(30, 0, -1));
console.log(largestof(-29, 20, -12));
console.log(largestof(5, 5, 8));
console.log(largestof(10, 10, 10));