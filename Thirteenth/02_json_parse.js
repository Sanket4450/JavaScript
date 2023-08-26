// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// Use the JavaScript function JSON.parse() to convert text into a JavaScript object

const object = JSON.parse('{"name":"Virat", "age":34, "game":"Cricket", "wickets":null}');

console.log(object);

// Make sure the text is in JSON format, or else you will get a syntax error.

const text1 = '{"firstName":"Sanket", "lastName":"Talaviya", "age":17}'; // single quotes is compulsory
const person1 = JSON.parse(text1);

console.log("Full Name : " + person1.firstName + " " + person1.lastName);

// When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

const text2 = '["Bugatti", "Lamborghini", "Ferrari", "Rolls Royce"]';
const cars = JSON.parse(text2);

console.log("My favourite car is : " + cars[0]);

// Date objects are not allowed in JSON.
// If you need to include a date, write it as a string. You can convert it back into a date object later

const text3 = '{"name":"Sachin Tendulkar", "birth":"24 Apr 2006", "game":"Cricket"}';
const person2 = JSON.parse(text3);

person2.birth = new Date(person2.birth);
console.log(person2.name + " was bornt on " +
person2.birth.getDate() + " " + "0" + Number(person2.birth.getMonth() + 1) + " " + person2.birth.getFullYear());

// reviver parameter is a function that checks each property, before returning the value.

const text4 = '{"firstName":"Cristiano", "lastName":"Ronaldo", "birth":"02-05-1985"}';
const person3 = JSON.parse(text4, function(key, value) {
    if (key == "birth") {
        return new Date(value);
    }
    else {
        return value;
    }
});
console.log(person3.birth.toString());

// Functions are not allowed in JSON.
// If you need to include a function, write it as a string. You can convert it back into a function later

const text5 = '{"name":"David Warner", "age": "function() {return 36;}", "country":"Australia"}';
const person4 = JSON.parse(text5);

person4.age = eval("(" + person4.age + ")");
console.log(person4.name + "'s age is " + person4.age());

/* You should avoid using functions in JSON, the functions will lose their scope, and you would have to
use eval() to convert them back into functions. */