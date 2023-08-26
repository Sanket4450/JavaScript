// Loops can execute a block of code a number of times.

// for statement creates a loop with 3 optional expressions

for (let i = 0; i < 5; i++){ // we can declare let inside the loop, cannot use outside the loop globally
    console.log("Sanket Talaviya");
} // loop started from 0 to 4 (total 5 times)

/* Normally you will use expression 1 to initialize the variable used in the loop(let i = 0), This is not
always the case. Expression 1 is optional. You can initiate many values in expression 1(separated by comma) */

// you can omit expression 1(like when your values are set before the loop starts)

let i = 1;

for (; i <= 10; i++){ // omit expression 1 but comma is compulsory
    console.log(i);
}

/* If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.
This will crash your browser. */

/* Expression 3 can do anything like negative increment(i--), positive increment(i = i + 15), or anything else.
Expression 3 can also be omitted(like when you increment your values inside the loop) */

for (let i = 10; i >= 1; i--){
    console.log(i);
}

for (let i = 1; i <= 15;){
    console.log(i);
    i++; // increment written here
}

// loop scope using var

var a = 0;
for (var a = 0; a < 5; a++){
    // variable visibles outside the loop as well
} console.log(a);

// loop scope using let

let b = 0;
for (let b = 0; b < 5; b++){
    // variable visibles within the loop
} console.log(b);