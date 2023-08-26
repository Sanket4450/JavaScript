// Loops can execute a block of code as long as a specified condition is true.

// while loop loops through a block of code as long as a specified condition is true.

let i = 0;

while (i < 10){
    console.log(i + 1);
    i++;
}

// If you forget to increase the variable used in the condition, the loop will never end.

/* do while loop is a variant of the while loop.This loop will execute the code block once, before checking
if the condition is true, then it will repeat the loop as long as the condition is true. */

let j = 0;

do {
    console.log(j + 1);
    j++;
} while (j < 10);

const arr = ["ABCDEFG", "HIJKLMN", "OPQRSTU", "VWXYZ"];

let k = 0;

while (arr[k]) {
    console.log(arr[k]);
    k++;
}