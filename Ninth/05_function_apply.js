// With the apply() method, you can write a method that can be used on different objects.
// apply() method is similar to the call() method

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
}
const person2 = {
    firstName: "Lionel",
    lastName: "Messi"
}
const person3 = {
    firstName: "Neymar",
    lastName: "Jr."
}

console.log(person.fullName.apply(person1)); // refers to the person1 object
console.log(person.fullName.apply(person2)); // refers to the person2 object
console.log(person.fullName.apply(person3)); // refers to the person3 object

/* difference between call() and apply() is that call() method takes arguments separately, whereas
apply() method takes arguments as an array. */

// apply() method is very handy as it accepts arguments in an array

const $person = {
    fullName: function(jersey, country) {
        return this.firstName + " " + this.lastName + ", " + jersey + ", " + country;
    }
}
const person4 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}
const person5 = {
    firstName: "Kumar",
    lastName: "Sangakkara"
}
const person6 = {
    firstName: "Ricky",
    lastName: "Ponting"
}

console.log($person.fullName.apply(person4, [10, "India"]));
console.log($person.fullName.apply(person5, [11, "Sri Lanka"]));
console.log($person.fullName.apply(person6, [14, "Australia"]));

// You can find the largest number(in a list of numbers) using the Math.max() method

let a = Math.max(23, 56, 20, 8, 2, 13);
console.log(a);  // will return 56

// Since JavaScript arrays do not have a max() method, you can apply the Math.max.apply() method instead.

let b = Math.max.apply(null, [23, 56, 20, 8, 2, 13]); // first argument (null) does not matter
console.log(b);  // will also return 56

let c = Math.max.apply(Math, [23, 56, 20, 8, 2, 13]);
console.log(c);  // will also return 56

let d = Math.max.apply("", [23, 56, 20, 8, 2, 13]);
console.log(d);  // will also return 56

let e = Math.max.apply(0, [23, 56, 20, 8, 2, 13]);
console.log(e);  // will also return 56