// Math.random() returns a random number between 0(inclusive), and 1(exclusive)

// Math.random() always returns a number lower than 1.

let a = Math.random();
console.log(a);

// There is no such thing as JavaScript integers, So we will use Math.floor() to round down numbers

let b = Math.floor(Math.random()); // but only gives 0 between 0 & 1 because of floor
console.log(b);

let c = Math.floor(Math.random() * 10); // this will give integer between 0 & 9
console.log(c);

let d = Math.floor(Math.random() * 11); // this will give integer between 0 & 10
console.log(d);

let e = Math.floor(Math.random() * 100); // this will give integer between 0 & 99
console.log(e);

let f = Math.floor(Math.random() * 101); // this will give integer between 0 & 100
console.log(f);

let g = Math.ceil(Math.random() * 10); // this will give integer between 1 & 10
console.log(g);

let h = Math.ceil(Math.random() * 100); // this will give integer between 1 & 100
console.log(h);

// we can use floor + 1 instead of ceil