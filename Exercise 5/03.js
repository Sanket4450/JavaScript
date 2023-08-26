// Write a JavaScript program to find the sum of squares of a numerical array.

function sumOfSquares(arr) {
    const squaredArr = arr.map(value => value * value);
    return squaredArr.reduce((total, value) => total + value, 0);
}

// call sumOfSquares function with an array of numbers as an argument

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([4, 0, 7, 22]));
console.log(sumOfSquares([12, -2, 0, 5, -16, 27]));