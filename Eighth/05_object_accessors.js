// Getters and setters allow you to define Object Accessors (Computed Properties).

// JavaScript Getter (The get Keyword)

const person1 = {
    firstName: "Tony",
    lastName: "Stark",
    language: "English",
    get lang() {  // lang became shortform for language
        return this.language; // returns language value
    }
};

console.log(person1.lang);

// JavaScript Setter(The set Keyword)

const person2 = {
    firstName: "Steve",
    lastName: "Rogers",
    language: "English",
    set lang(lang) {
        this.language = lang;
    }
};

person2.lang = "German";

console.log(person2.language);

// function & getter are quite similar

const person3 = {
    firstName: "Robert",
    lastName: "Downey Jr.",
    character: "Iron Man",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person3.fullName());

const person4 = {
    firstName: "Chris",
    lastName: "Evans",
    character: "Captain America",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person4.fullName); // getter provides a simpler syntax

// JavaScript can secure better data quality when using getters and setters.

const person5 = {
    firstName: "Iron",
    lastName: "Man",
    language: "English",
    get lang() {
        return this.language.toUpperCase(); // returns the value of the language property in upper case
    }
}
console.log(person5.lang);

const person6 = {
    firstName: "Captain",
    lastName: "Thor",
    language: "English",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
}
person6.lang = "German";
console.log(person6.language);