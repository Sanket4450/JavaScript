/* Write a JavaScript function that takes an array and a number as arguments and returns an array with
specified number of elements from the given array. */

function arrayElements(arr, n) {
    const newArr = [];

    if (n > arr.length) {
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    }
    else {
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// call arrayElements function with two arguents: an array and and a value

console.log(arrayElements([12, 45, 0, -2, 100], 3));
console.log(arrayElements([34, -23, null, "Sanket"], 1));
console.log(arrayElements([NaN, 1001, -Infinity, 304, '%'], 10));
console.log(arrayElements([34, 500, null, "Talaviya", "123"], -12));

const arr = ['A', 'B', "ABC", 34, undefined]
console.log(arrayElements(arr, 4));