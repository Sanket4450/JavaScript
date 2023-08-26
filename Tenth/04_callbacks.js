// A callback is a function passed as an argument to another function

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function displayer(something) {
    console.log(something);
}
function first() {
    displayer("Good Morning!");
}
function second() {
    displayer("Good Afternoon!");
}
function third() {
    displayer("Good Night!");
}

second();
third();
first();

// Sometimes you would like to have better control over when to execute a function.

/* You could call a calculator function (myCalculator), save the result, and then call another function
(myDisplayer) to display the result */

function myDisplayer1(something) {
    console.log(something);
}
function myCalculator1(x, y) {
    let sum = x + y;
    return sum;
}

let result = myCalculator1(12, 7);
myDisplayer1(result);

/* Or, you could call a calculator function (myCalculator), and let the calculator function call
the display function (myDisplayer) */

function myDisplayer2(something) {
    console.log(something);
}
function myCalculator2(x, y) {
    let multiplication = x * y;
    myDisplayer2(multiplication);
}

myCalculator2(6, 4);

// problem with the first example above, is that you have to call two functions to display the result.

// problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// A callback is a function passed as an argument to another function.

/* Using a callback, you could call the calculator function (myCalculator) with a callback(myCallback),
and let the calculator function run the callback after the calculation is finished */

function myDisplayer3(something) {
    console.log(something);
}
function myCalculator3(x, y, myCallback) {
    let sum = x + y;
    myCallback(sum);
}

myCalculator3(8, 5, myDisplayer3);

// In the example above, myDisplayer is a called a callback function. It is passed to myCalculator() as an argument.

// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());