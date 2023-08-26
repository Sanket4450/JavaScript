// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!!";
    }
}

const myCar = new Car("Toyota");

console.log(Car.hello());

// console.log(myCar.hello()); this will raise an error

// If you want to use the myCar object inside the static method, you can send it as a parameter

class Car1 {
    constructor(name) {
        this.name = name;
    }
    static hello1(x) {
        return "Hello!!! " + x.name;
    }
}

const myCar1 = new Car1("Nissan");

console.log(Car1.hello1(myCar1));