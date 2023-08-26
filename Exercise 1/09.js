/* Write a JavaScript program to compute the sum of the two given integers.
If the two values are the same, then return triple their sum. */

function sum(x, y) {
    if (x === y) {
        console.log((x + y) * 3);
    }
    else {
        console.log(x + y);
    }
}

sum(4, 7);
sum(16, 10);
sum(5, 5);