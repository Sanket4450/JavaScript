/* An array can hold many values under a single name, and you can access the values by
referring to an index number. */

// It is a common practice to declare arrays with the const keyword.

const cars = ["Mercedes", "BMW", "Audi", "Volvo"];

// Spaces and line breaks are not important.A declaration can span multiple lines

const bikes =
["Honda",
"Hero",
"Bajaj",
"Suzuki"];

// You can also create an array, and then provide the elements

const mobiles = [];

mobiles[0] = "Apple";
mobiles[1] = "Samsung";
mobiles[2] = "OnePlus";

// following example also creates an Array, and assigns values to it:

const games = new Array("Clash of Clans", "Fortnite", "PUBG Mobile", "Apex Legends");

/* There is no need to use new Array(), For simplicity, readability and execution speed,
use the array literal method. */

// Array indexes start with 0, [0] is the first element. [1] is the second element.

// changing an array element using index

const cars1 = ["Mercedes", "BMW", "Audi", "Volvo"];
cars[0] = "Ferari";
console.log(cars1);

// toString() converts an array to a string of(comma separated) array values.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];
console.log(fruits.toString());

// typeof operator in JavaScript returns "object" for arrays, Arrays are special kinds of objects.

console.log(typeof fruits);

// Arrays use numbers to access its "elements".

// Arrays use numbers to access its "elements" whereas Objects use names to access its "members".

// length property of an array returns the length of an array(the number of array elements).

console.log(fruits.length);

// Accessing the First Array Element

let fruit1 = fruits[0];
console.log(fruit1);

// Accessing the Last Array Element

let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);

// One way to loop through an array, is using a for loop

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// The easiest way to add a new element to an array is using the push() method

fruits.push("Pineapple");

// In JavaScript, arrays use numbered indexes, In JavaScript, objects use named indexes.

