// JavaScript variables can belong to the local or global scope.

// Global variables can be made local(private) with closures.

// A function can access all variables defined inside the function

function myFunction1() {
    let a = 8;  // here, a is a local variable
    return a * a;
}
console.log(myFunction1());

// But a function can also access variables defined outside the function

let b = 6;

function myFunction2(){
    return b + b;  // b is a global variable
}
console.log(myFunction2());

/* Variables created without a declaration keyword (var, let, or const) are always global,
even if they are created inside a function. */

myFunction3();  // to access the variable outside the function, we need to call the function first
console.log(c * c);
function myFunction3() {
    c = 15;  // c is a global variable
}

// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// you want to use a variable for counting something, and you want this counter to be available to all functions.
// You could use a global variable, and a function to increase the counter

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
    counter += 1;
}

// Call add() 3 times
add();
add();
add();
add();

// The counter should now be 4
console.log(counter);

// counter should be local to the add() function, to prevent other code from changing it

// Initiate counter
let counter1 = 0;

// Function to increment counter
function add1() {
    let counter1 = 0;
    counter1 += 1;
}

// Call add1() 3 times
add1();
add1();
add1();

console.log(counter1); // The result is not 3 because you mix up the globaland local counter

// It did not work because we display the global counter instead of the local counter.
// We can remove the global counter and access the local counter by letting the function return it

// Function to increment counter
function add2() {
    let counter2 = 0;
    counter2 += 1;
    return counter2;
}

// Call add() 3 times
add2();
add2();
add2();

console.log(add2()); // The counter should now be 4. But it is 1.

// It did not work because we reset the local counter every time we call the function.
// A JavaScript inner function can solve this.

function add3() {
    let counter3 = 0;
    function plus() {
        counter3 += 1;
    }
    plus();
    return counter3;
}

add3();
add3();
add3();

console.log(add3()); // The counter should now be 4. But it is 1.

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once. We need a closure.

const add4 = (function() {
    let counter4 = 0;
    return function() {
        counter4 += 1;
        return counter4;
    }
})();

add4();
add4();
add4();
add4();

console.log(add4()); // the counter is now 5

// A closure is a function having access to the parent scope, even after the parent function has closed.