// With the bind() method, an object can borrow a method from another object.

const person = {
    firstName: "Christian",
    lastName: "Bale",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName: "Leonardo",
    lastName: "Dicaprio"
}

let abc = person.fullName.bind(member); // fullName mathod borrowed to member & stored in abc
console.log(abc());  // calling abc to print fullName for member

const name = {
    firstName: "Robert",
    lastName: "Downey Jr."
}

console.log(person.fullName.call(name));
console.log(person.fullName.apply(name));
console.log(person.fullName.bind(name)());

// above, we can see the difference between call, apply & bind method, we need to call the bind method