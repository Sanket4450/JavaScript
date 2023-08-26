// Displaying a JavaScript object will output[object Object].

const person = {
    firstName: "Sanket",
    lastName: "Talaviya",
    age: 17,
    nationality: "Indian"
};

console.log(person);

// properties of an object can be displayed as a string

const person1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 38,
    nationality: "Portuguese"
};

console.log(person1.firstName + "\n" + person1.lastName + "\n" + person1.age + "\n" + person1.nationality);

// properties of an object can be collected in a loop

const person2 = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 36,
    nationality: "Argentine"
};

for (let x in person2) {
    console.log(person2[x]); // person2.x will not work as x is a variable
}

// object can be converted to an array using Object.values()

const person3 = {
    firstName: "Neymar",
    lastName: "Jr.",
    age: 31,
    nationality: "Brazilian"
};

const myArray = Object.values(person3); // myArray is now a JavaScript array, ready to be displayed

console.log(myArray);

// object can be stringified(converted to a string) with the JavaScript function JSON.stringify()

const person4 = {
    firstName: "Ousmane",
    lastName: "Dembele",
    age: 26,
    nationality: "French"
};

const myString = JSON.stringify(person4); // myString is now a JavaScript string, ready to be displayed

console.log(myString); // result will be a string following the JSON notation

// JSON.stringify converts dates into strings

const person5 = {
    name: "Sanket Talaviya",
    today: new Date()
};

let myString1 = JSON.stringify(person5);

console.log(myString1);

// JSON.stringify will not stringify functions

// It is also possible to stringify JavaScript arrays

const arr = ["Arijit", "Atif", "Jubin"];

let myString2 = JSON.stringify(arr);

console.log(myString2);