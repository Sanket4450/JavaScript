// Since 2015, It has become a common practice to declare arrays using const

const cars = ["Mercedes", "BMW", "Audi", "Volvo"];
console.log(cars);

// An array declared with const cannot be reassigned

/* It does NOT define a constant array.It defines a constant reference to an array. Because of this, we can
still change the elements of a constant array. */

cars[0] = "Ferrari";
console.log(cars);

// An array declared with const must be initialized when it is declared.

// Arrays declared with var or let can be initialized at any time.

var bikes = [];
bikes = ["Honda", "Hero", "Bajaj", "Suzuki"];
console.log(bikes);

// You can even use the array before it is declared

games = ["Clash of Clans", "Fortnite", "PUBG Mobile", "Apex Legends"];
console.log(games);
let gemes;

/* An array declared with const has Block Scope, An array declared in a block is not the same as an array
declared outside the block */

const mobiles = ["Apple", "Samsung", "OnePlus"];
console.log(mobiles);

{
    const mobiles = ["Vivo", "Oppo", "Xiaomi"];
    console.log(mobiles);
}

// An array declared with var does not have block scope

var apps = ["Google", "YouTube", "WhatsApp"];

{
    var apps = ["Yahoo", "YouTube", "WhatsApp"];
}
// Yahoo still remains here
console.log(apps);

// Redeclaring an array declared with var is allowed anywhere in a program

var companies = ["Google", "YouTube", "Apple"]; // Allowed
var companies = ["Google", "Tesla", "Apple"]; // Allowed
companies = ["TATA", "Tesla", "Samsung"]; // Allowed

// Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed

// Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed

// Redeclaring an array with const, in another scope, or in another block, is allowed

const movies = ["KGF", "KGF2", "KGF3"]; // Allowed
{
    const movies = ["KGF", "KGF2", "KGF3"]; // Allowed
}
{
    const movies = ["KGF", "KGF2", "KGF3"]; // Allowed
}