// Iterable objects are objects that can be iterated over with for..of.

// You can use a for..of loop to iterate over the elements of a string

const name = "Sanket "; // last space will also be printed

for (let x of name) {
    console.log(x);
}

// You can use a for..of loop to iterate over the elements of an Array

const letters = ["A", "B", "C", "D"];

for (let x of letters) {
    console.log(x);
}
console.log(); // for a line-break (new line)

const names = ["ABCD", "efgh", "IJKL", "mnop"];

for (let x of names) {
    console.log(x);
}

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {value: n, done: false};
        }
    }
}

// Create Iterable
const n = myNumbers();
console.log(n.next().value);
console.log(n.next().value);

// problem with a home made iterable, It does not support the JavaScript for..of statement.

