// Write a JavaScript program to find all the unique values in a set of names from an array of objects

const persons = [
    { id: 1, name: "Sanket" },
    { id: 2, name: "Manav" },
    { id: 3, name: "Khushal" },
    { id: 4, name: "Manav" },
    { id: 5, name: "Parth" },
    { id: 6, name: "Jenil" },
    { id: 7, name: "Sahil" },
    { id: 8, name: "Krish" },
    { id: 9, name: "Khushal" },
    { id: 10, name: "Manav" }
];

const uniqueNames = new Set();

for (let x of persons) {
    uniqueNames.add(x.name);
}
for (let x of uniqueNames) {
    console.log(x);
}