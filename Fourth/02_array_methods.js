// length property returns the length(size) of an array

const cars = ["Bugatti", "Ferarri", "Lamborghini", "Rolls Royce"];
let length = cars.length;

console.log(length);

// toString() converts an array to a string of(comma separated) array values.

let str1 = cars.toString();

console.log(str1);

/* join() method also joins all array elements into a string, It behaves just like toString(), but in
addition you can specify the separator */

let str2 = cars.join(" - ");

console.log(str2);

// pop() method removes the last element from an array

let car1 = cars.pop(); // pop() method returns the value that was "popped out"

console.log(car1);
console.log(cars); // last element is removed

// push() method adds a new element to an array(at the end)

let car2 = cars.push("Maruti"); // push() method returns the new array length

console.log(car2);
console.log(cars); // new element is added at last

// shift() method removes the first array element and "shifts" all other elements to a lower index.

let car3 = cars.shift(); // shift() method returns the value that was "shifted out"

console.log(car3);
console.log(cars); // first element is removed

// unshift() method adds a new element to an array(at the beginning), and "unshifts" older elements

let car4 = cars.unshift("Koenigsegg"); // unshift() method returns the new array length

console.log(car4);
console.log(cars); // new element is added at first

// length property provides an easy way to append a new element to an array

cars[cars.length] = "Volvo";
console.log(cars);

// Array elements can be deleted using the JavaScript operator delete.

delete cars[2]; // Using delete leaves undefined holes in the array, Use pop() or shift() instead.

// concat() method creates a new array by merging(concatenating) existing arrays

const bikes = ["Honda", "Hero", "Bajaj", "Suzuki"];

let vehicles = cars.concat(bikes);

console.log(vehicles);

// concat() method can take any number of array arguments

// concat() method can also take strings as arguments

let bike1 = bikes.concat("Bajaj");
console.log(bike1);

// Flattening an array is the process of reducing the dimensionality of an array.
// flat() method creates a new array with sub - array elements concatenated to a specified depth.

const Arr1 = [[1, 2], [3, 4], [5, 6]];
const arr1 = Arr1.flat(); // converted 2 dimensional array into 1 dimensional

console.log(arr1);

// splice() method can be used to add new items to an array

const fruits = ["Apple", "Banana", "Orange"];
fruits.splice(2, 0, "Mango", "Grapes");

// first parameter(2) defines the position where new elements should be added(spliced in).
// second parameter(0) defines how many elements should be removed.
// rest of the parameters define the new elements to be added.
// splice() method returns an array with the deleted items

console.log(fruits);

const games = ["Cricket", "Soccer", "Kabaddi", "Baseball"];
games.splice(1, 2, "Football", "Hockey");

console.log(games);

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array

const languages = ["English", "Spanish", "Chinese", "Hindi", "Arabic"];

languages.splice(1, 1, "French"); // Spanish out, French in
languages.splice(3, 1); // Hindi out

console.log(languages);

// slice() method slices out a piece of an array into a new array.

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1);

console.log(citrus);

// slice() method can take two arguments like slice(1, 3), but 3 is not included

const citrus1 = fruits1.slice(1, 3);

console.log(citrus1);