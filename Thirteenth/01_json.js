// JSON stands for JavaScript Object Notation is a text format for storing and transporting data

/* JSON format is syntactically similar to the code for creating JavaScript objects.Because of this,
a JavaScript program can easily convert JSON data into JavaScript objects. */

// JSON data can easily be sent between computers, and used by any programming language.

/* You can receive pure text from a server and use it as a JavaScript object. You can send a JavaScript
object to a server in pure text format. */

let object1 = {name:"Sanket", age:17, country:"India"}; // this is a JS object

console.log(object1.name); // accessing object
console.log(object1["name"]); // can also be accessed like this

object1.name = "Danket"; // modifying object data
object1.age = 21; // can also be modified like this

console.log(object1.name); // accessing the modified data
console.log(object1.age); // accessing the modified data

// same way JavaScript objects can be written as JSON, JavaScript arrays can also be written as JSON.