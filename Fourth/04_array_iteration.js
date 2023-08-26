// Array iteration methods operate on every array item.

// forEach() method calls a function (a callback function) once for each array element.

const numbers = [5, 8, 13, 25, 10];

numbers.forEach(myFunction1);

function myFunction1(value, index, array) { // we can give any names to these parameters
    console.log(value); // prints values of array
} // it's not necessary to write all 3 parameters, here we're accessing first so index & array need not to be written

// function takes 3 arguments: item value, item index, array itself

console.log(); // just for line-break

numbers.forEach(myFunction2);

function myFunction2(value, index, array) {
    console.log(index); // prints indexes of array
}

console.log(); // just for line-break

numbers.forEach(myFunction3);

function myFunction3(value, index, array) {
    console.log(array); // prints array itself
}

console.log(); // just for line-break

numbers.forEach(myFunction4);

function myFunction4(value, index, array) {
    console.log(index, value, array); // first print index, then value & then the whole array
}

console.log(); // just for line-break

// map() method creates a new array by performing a function on each array element.
// map() method does not execute the function for array elements without values.
// map() method does not change the original array.

console.log(numbers.map(myFunction5)); // function will be just returning values & won't be printing
console.log(numbers.map(myFunction6));

function myFunction5(value, index, array) {
    return value * 2; // returns all values with multiplied by 2
}

// When a callback function uses only the value parameter, the index and array parameters can be omitted
function myFunction6(value) {
    return value / 2 + 3;
}

console.log(); // just for line-break

console.log(numbers.flatMap(myFunction7)); // flatMap() method

function myFunction7(value) {
    return value + 5;
}

console.log(); // just for line-break

// filter() method creates a new array with array elements that pass a test.

console.log(numbers.filter(myFunction8));
console.log(numbers.filter(myFunction9));
console.log(numbers.filter(myFunction10));

function myFunction8(value) {
    return value >= 10;
}

function myFunction9(value) {
    return value % 2 === 0;
}

function myFunction10(value, index) {
    return index > 2; // we filtered index so that index (greater than 2) values will be printed & not indexes
}

console.log(); // just for line-break

// reduce() method runs a function on each array element to produce (reduce it to) a single value.
// reduce() method works from left - to - right in the array, it does not reduce the original array.

console.log(numbers.reduce(myFunction11));

function myFunction11(total, value, index, array) { // here, first parameter represents total values
    return total + value;
}
// Note that the function takes 4 arguments: total (the initial value / previously returned value)

console.log(numbers.reduce(myFunction12, 0)); // initial value of total by writing an argument

function myFunction12(total, value, index, array) {
    return total + index;
}
console.log(numbers.reduce(myFunction13, 100)); // here, initial value is 100

function myFunction13(total, value, index, array) {
    return total + value;
}

console.log(); // just for line-break

// reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// reduceRight() works from right-to-left in the array.

console.log(numbers.reduceRight(myFunction14));

function myFunction14(total, value) {
    return total + value;
}

console.log(numbers.reduceRight(myFunction15, 0)); // initial value of total by writing an argument

function myFunction15(total, value, index, array) {
    return total + index;
}
console.log(numbers.reduceRight(myFunction16, 100)); // here, initial value is 100

function myFunction16(total, value, index, array) {
    return total + value;
}

console.log(); // just for line-break

// every() method checks if all array values pass a test.

console.log(numbers.every(myFunction17));

function myFunction17(value) {
    return value < 18; // if all array values specify the codition, then it will return true otherwise false
}

console.log(numbers.every(myFunction18));

function myFunction18(value) {
    return value < 30; // this will return true as all array values are less than 30 (specify the condition)
}

console.log(); // just for line-break

// some() method checks if some array values pass a test.

console.log(numbers.some(myFunction19));

function myFunction19(value) {
    return value < 18; // if any one value specifies the codition, it will be true otherwise false
}

console.log(numbers.some(myFunction20));

function myFunction20(value) {
    return value < 30; // returns true as all values specify condition, only one is necessary
}

console.log(numbers.some(myFunction21));

function myFunction21(value) { // returns false as all values don't specify condition
    return value < 5;
}

console.log(); // just for line-break

// indexOf() method searches an array for an element value and returns its position.

console.log(numbers.indexOf(13)); // 13 is third element but array index starts from 0 that's why it's 2

console.log(numbers.indexOf("10")); // here, it cannot find it as we've entered number as string

// Array.indexOf() returns - 1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

const mobiles = ["Apple", "Samsung", "Oppo", "OnePlus", "Oppo", "Vivo"];

console.log(mobiles.indexOf("Oppo")); // it returns first occurrence

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

console.log(mobiles.lastIndexOf("Oppo")); // it returns last occurrence

console.log(mobiles.indexOf("OnePlus", 3)); // it will try to find this from position 3

// find() method returns the value of the first array element that passes a test function.

console.log(numbers.find(myFunction22)); // first array element to pass the test (value > 10)

function myFunction22(value, index, array) {
    return value > 10;
}

// findIndex() method returns the index of the first array element that passes a test function.

console.log(numbers.findIndex(myFunction23)); // prints index of the first array element that passes the test

function myFunction23(value) {
    return value > 10;
}

// Array.from() method returns an Array object from any object with a length property or any iterable object.

console.log(Array.from("ABCDEFG"));

// Array.keys() method returns an Array Iterator object with the keys of an array.

for (let x of mobiles.keys()) {
    console.log(x);
}
console.log(); // just for line-break

for (let x of numbers.keys()) {
    console.log(x);
}

console.log(); // just for line-break

// entries() method returns an Array Iterator object with key/value pairs

for (let x of mobiles.entries()) {
    console.log(x);
}
console.log(); // just for line-break

for (let x of numbers.entries()) {
    console.log(x);
}

console.log(); // just for line-break

// Array.includes() allows us to check if an element is present in an array (including NaN, unlike indexOf).

console.log(numbers.includes(13));

console.log(numbers.includes(20));

console.log(numbers.includes("13")); // returns false as it's a string number

console.log(); // just for line-break

console.log(mobiles.includes("Oppo"));

console.log(mobiles.includes("OnePlus"));

console.log(mobiles.includes("Oneplus")); // returns false as it is case-sensitive

// Spread (...) operator expands an iterable (like an array) into more elements

const indian = ["Samosa", "Vadapav", "Dhokla"];
const italian = ["Pizza", "Lasagna", "Tiramisu"];
const american = ["Ice Cream", "Hot Dog", "Hamburger"];
const mexican = ["Tacos", "Ceviche", "Churros"];

let food = [...indian, ...mexican, ...italian, ...american];

console.log(food);

console.log(...indian, ...american, ...italian, ...mexican);