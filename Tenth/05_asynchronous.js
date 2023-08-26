// Functions running in parallel with other functions are called asynchronous

function myDisplayer(something) {
    console.log(something);
}
function myCalculator(x, y, myCallback) {
    let sum = x + y;
    myCallback(sum);
}

myCalculator(13, 8, myDisplayer);

// In the example above, myDisplayer is the name of a function. It is passed to myCalculator() as an argument.

// In the real world, callbacks are most often used with asynchronous functions. A typical example is JavaScript setTimeout().

// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out

setTimeout(myFunction, 3000); // 3000 milliseconds = 3 seconds
// 3000 is the number of milliseconds before time - out, so myFunction() will be called after 3 seconds.

function myFunction() {
    console.log("I am Inevitable!");
}

// In the example above, myFunction is used as a callback. myFunction is passed to setTimeout() as an argument.

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead

setTimeout(function() { myFunction1("I am Iron Man");}, 5000); // 5000 milliseconds = 5 seconds

function myFunction1(something) {
    console.log(something);
}

/* In the example above, function () { myFunction("I am Iron Man"); } is used as a callback.
It is a complete function. The complete function is passed to setTimeout() as an argument. */

/* When using the JavaScript function setInterval(), you can specify a callback function to be executed
for each interval */

setInterval(myFunction2, 1000); // 1000 milliseconds = 1 second
// 1000 is the number of milliseconds between intervals, so myFunction() will be called every second.

function myFunction2() {
    let x = new Date();
    console.log(x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds());
}

// In the example above, myFunction is used as a callback. myFunction is passed to setInterval() as an argument.