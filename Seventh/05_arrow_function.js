// Arrow functions allow us to write shorter function syntax

// first method
function myFunction1(){
    return "Hello World!";
}
console.log(myFunction1());

// second method
myFunction2 = function(){
    return "Hello World!";
}
console.log(myFunction2());

// third method (arrow function)
myFunction3 = () => {
    return "Hello World!";
}
console.log(myFunction3());

/* If the function has only one statement, and the statement returns a value, you can remove the brackets and
the return keyword */

myFunction4 = () => "Hello World!";
console.log(myFunction4());

// If you have parameters, you pass them inside the parentheses

myFunction5 = (a, b) => a + b;
console.log(myFunction5(10, 20));

// If you have only one parameter, you can skip the parentheses as well

myFunction6 = x => x * x;
console.log(myFunction6(12));