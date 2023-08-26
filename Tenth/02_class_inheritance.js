// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class

/* super() method refers to the parent class. By calling the super() method in the constructor method,
we call the parent's constructor method and gets access to the parent's properties and methods. */

class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return "I have a " + this.carName;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        return this.present() + ", it is " + this.model;
    }
}

const myCar = new Model("Bugatti", "Chiron");
console.log(myCar.show());

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// Classes also allows you to use getters and setters.