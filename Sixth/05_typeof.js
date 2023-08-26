// In JavaScript there are 5 different data types that can contain values: string, number, boolean, object, function

// There are 6 types of objects: Object, Date, Array, String, Number, Boolean

// 2 data types that cannot contain values: null, undefined

// You can use the typeof operator to find the data type of a JavaScript variable.

// A primitive data value is a single simple data value with no additional properties and methods.

console.log(typeof 10);
console.log(typeof 12.5);
console.log(typeof 0);

console.log(typeof "Sanket");
console.log(typeof "false");
console.log(typeof "15");
console.log(typeof "0");

console.log(typeof true);
console.log(typeof false);

console.log(typeof x);
console.log(typeof _x);
console.log(typeof $x);

// typeof operator can return one of two complex types: object, function
// typeof operator returns "object" for objects, arrays, and null, doesn't return "object" for functions

console.log(typeof {Name: "Sanket", Age: 21});
console.log(typeof [1, 2, "San", "ket"]); // arrays are objects in JavaScript
console.log(typeof null);
console.log(typeof function myFunction(){});

// You can consider it a bug in JavaScript that typeof null is an object, It should be null.

// typeofoperator is not a variable.It is an operator.Operators(+ - * / ) do not have any data type.

// constructor property returns the constructor function for all JavaScript variables.

console.log((12.44).constructor);
console.log("SK".constructor);
console.log(false.constructor);
console.log(function(){}.constructor);
console.log(new Date().constructor);
console.log([1, 2, 13, 25].constructor);
console.log({name: "Sanket", age: 23, height: 165}.constructor);