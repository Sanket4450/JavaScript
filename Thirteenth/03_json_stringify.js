// A common use of JSON is to exchange data to/from a web server.

// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

// Use the JavaScript function JSON.stringify() to convert it into a string.

const object = {name: "Sanket Talaviya", age: 17, city: "Surat"};
const string = JSON.stringify(object);

// result will be a string following the JSON notation, and will be ready to be sent to a server

console.log(string); // it's not a normal string, but a JSON string with key-value pairs

console.log(); // just for line-break

// It is also possible to stringify JavaScript arrays

const array = ["Cricket", "Soccer", "Golf", "Badminton"];
const string1 = JSON.stringify(array);

// result will be a string following the JSON notation, and will be ready to be sent to a server

console.log(string1);

console.log(); // just for line-break

// In JSON, date objects are not allowed. JSON.stringify() function will convert any dates into strings.

const person = {name: "Nathan Coulternile", today: new Date(), country: "Australia"};
const myJSON = JSON.stringify(person);
console.log(myJSON);

console.log(); // just for line-break

// In JSON, functions are not allowed as object values.

// JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value

const person1 = {name: "Elon Musk", age: function() {return 52}, country: "United States"};
const myJSON1 = JSON.stringify(person1);
console.log(myJSON1);

console.log(); // just for line-break

// This can be omitted if you convert your functions into strings before running the JSON.stringify() function.

person1.age = person1.age.toString();
const myJSON2 = JSON.stringify(person1);
console.log(myJSON2);

/* If you send functions using JSON, the functions will lose their scope, and the receiver would have to
use eval() to convert them back into functions. */