// Write a function which takes an array of integers and returns true if any three consecutive elements sum to 7.

function luckySevens(arr) {

    if (arr.length < 3) return "not possible!";

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] + arr[i - 1] + arr[i - 2] === 7) return true;
    }
    return false;
}

console.log(luckySevens([12, 20, 8, 2, 4, 1, 10]));