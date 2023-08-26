/* Properties are the values associated with a JavaScript object, They can usually be changed, added,
and deleted, but some are read only. */

const person1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 38
};

// syntax for accessing the property of an object is : ObjectName.property or ObjectName["property"]

console.log(person1.firstName + " is " + person1.age + " years old.");

console.log(person1["firstName"] + " is " + person1["age"] + " years old.");

// for...in statement loops through the properties of an object.

for (let x in person1) {
    console.log(person1[x])
}

// You can add new properties to an existing object by simply giving it a value.

person1.nationality = "Portuguese";

console.log(person1.firstName + " " + person1.lastName + " is " + person1.nationality);

// delete keyword deletes a property from an object

delete person1.age; // or delete person1["age"];

console.log(person1.age); // "age" is now deleted

// delete keyword deletes both the value of the property and the property itself.

// Values in an object can be another object (nested object)

const person2 = {
    firstName: "Leonal",
    lastName: "Messi",
    age: 36,
    cars: {
        car1: "Ferrari",
        car2: "Mercedes",
        car3: "BMW"
    }
}

// You can access nested objects using the dot notation or the bracket notation

console.log(person2.cars.car2); // or
console.log(person2.cars["car2"]); // or
console.log(person2["cars"]["car2"]); // or

let p1 = "cars"; // "cars" property is asssigned to p1
let p2 = "car2"; // "car2" property is asssigned to p2
console.log(person2[p1][p2]); // .(dot) method isn't allowed in this case

// Values in objects can be arrays, and values in arrays can be objects (nested arrays & objects)

const person3 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 34,
    cars: [
        {name: "Audi", models: ["R8", "Q7", "RS5", "A8"]},
        {name: "Bentley", models: ["Flying Spur", "Continental", "Continental GT"]},
        {name: "Range Rover", models: ["Range Rover", "Range Rover Evoque"]}
    ]
};

// To access arrays inside arrays, use a for-in loop for each array

for (let x in person3.cars) {
    console.log(person3.cars[x]);
}

for (let i in person3.cars) {
    console.log(person3.cars[i].name);

    for (let j in person3.cars[i].models) {
        console.log(person3.cars[i].models[j]);
    }
}