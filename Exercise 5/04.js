// Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct(arr) {
    let sum = arr.reduce((total, value) => total + value, 0);
    let product = arr.reduce((total, value) => total * value, 1);
    return `Sum is : ${sum} & Product is : ${product}`;
}

// call sumAndProduct function with an array of integers as an argument

console.log(sumAndProduct([1, 2, 3, 4, 5]));
console.log(sumAndProduct([16, -12, 7, 24, 19]));

const arr = [12, 25, -8, 0];
console.log(sumAndProduct(arr));