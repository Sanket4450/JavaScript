// Use the keyword class to create a class, Always add a method named constructor()

class Car {
    constructor(name, year) {
    this.name = name;
    this.year = year;
    }
}

// A JavaScript class is not an object, It is a template for JavaScript objects.

const myCar1 = new Car("BMW", 2023);
const myCar2 = new Car("Audi", 2020);

// example above uses the Car class to create two Car objects.