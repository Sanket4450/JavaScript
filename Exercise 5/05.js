/* Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array
whose sum equals a specific target number. */

function findPair(arr, n) {
    const pairs = [];
    arr.filter(value1 => {
        arr.filter(value2 => {
            if (value1 + value2 === n) {
                pairs.push(`${value1}, ${value2}`);
            }
        });
    });
    return pairs;
}

// call findPair function with two arguments: an array of integers and a target value

console.log(findPair([1, 2, 3, 4, 5], 5));
console.log(findPair([10, 20, 30, 40, 50, 60, 70], 50));

const arr = [12, 35, 30, 48, 29, 31, 80, 25];
console.log(findPair(arr, 60));

// above function returns permutations but now we want combinations (no swapped value pairs)

function findPairOnce(arr, n) {
    const pairs = [];
    arr.filter(value1 => {
        arr.filter(value2 => {
            if (value1 + value2 === n) {
                pairs.push(`${value1}, ${value2}`);
            }
        });
    });
    return pairs.slice(0, pairs.length / 2);
}

console.log(findPairOnce([1, 2, 3, 4, 5], 5));
console.log(findPairOnce([10, 20, 30, 40, 50, 60, 70], 50));
console.log(findPairOnce(arr, 60));