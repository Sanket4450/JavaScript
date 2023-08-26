// Write a JavaScript program to find all the unique values in a set of numbers.

function uniqueValues(arr) {
    const uniqueSet = new Set();

    arr.forEach(value => {
        uniqueSet.add(value);
    });
    return uniqueSet;
}

// call uniqueValues function with an array in argument

console.log(uniqueValues([12, 20, 12, 0, 7, 12, 8, 8]));
console.log(uniqueValues([30, 18, -9, -24, 18, 0, -9, 10]));

const arr = [12, 25, -42, 0, -13, 25, 0];
console.log(uniqueValues(arr));