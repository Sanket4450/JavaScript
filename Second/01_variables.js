// A JavaScript variable is simply a name of storage location.

// local variable is can only used inside a block of code
// global variable is can be used anywhere in the program

// JS Variables are case-sensitive & must start with a letter, underscore or $ sign

var value = 10;
var _value = 20;
var $value = 30;
var value1 = 40; // These all are valid

var a = 24; // this is a global variable which can be accessed anywhere in the program

function myfunction1(){
    var b = 15; // this is a local variable which can be accessed only in the function
    console.log(b);
}

function myfunction2(){
    // To declare JavaScript global variables inside function, you need to use window object.

    var c = 25;
    window.value = 4096;
}

// we can declare varible with 3 types : var, let, const

    // var was used to declare variables earlier version of JavaScript
    // Now, we use let & const more frequently
    // const value can't be changed as let value ca be changed

// var is globally scoped while let & const are block scoped

var a = 10;
let b = 20;
const c = 30;

{ 
    console.log(a);
    console.log(b);
    console.log(c);
}

// let's have a reversed condition

{
    var d = 100;
    let e = 200;
    const f = 300;
}

console.log(d);
// console.log(e); this won't work as we've declared let value in block
// console.log(f); this won't work as we've declared const value in block

{
    var g = 1000;
    let h = 2000;
    const i = 3000;
}

{
    console.log(g);
    // console.log(h); this will not work
    // console.log(i); this will not work
}

// var can be updated & re-declared within its scope

var j = 10000;
var j = 20000;

let k = 30000;
k = 40000;
// let k = 40000; let can't be re-declared but its value can be changed  

const l = 50000;
// const l = 60000; const can neither be re-declared nor its value can be changed

console.log(j);
console.log(k);
console.log(l);

// const must be initialized during declaration unlike var & let

var m;
m = 10;

let n;
n = 20;

// const o; must be initialized during declaration
// o = 30;

console.log(m);
console.log(n);
// console.log(o);

p = 100;
var p;

// q = 200;
// let q; this will not work

console.log(p);
// console.log(q);

// we can access var before its declaration but its value must be initialized first

r = 1000;
console.log(r);
var r;

// s = 2000;
// console.log(s); let can't be accessed before its declaration
// let s;