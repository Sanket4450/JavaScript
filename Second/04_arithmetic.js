/* JavaScript Arithmetic Operators are the operators that operate upon the numerical values and
return a numerical value. Any kind of arithmetic operations performance required these operators. */

/* The addition operator takes two numerical operands and gives their numerical sum.
It also concatenates two strings or numbers. */

let a = 10 + 4;
console.log(a);

let b = 10 + "Hello";
console.log(b);

// The subtraction operator gives the difference between two operands in the form of numerical value.

let c = 10 - 4;
console.log(c);

let d = "Hello" - 10;
console.log(d);

/*  The multiplication operator gives the product of operands where one operand is a multiplicand and
another is multiplier. */

let e = 10 * 4;
console.log(e);

let f = -10 * 4;
console.log(f);

let g = Infinity * 0;
console.log(g);

let h = Infinity * Infinity;
console.log(h);

let i = "Hello" * 10;
console.log(i);

/* The division operator provides the quotient of its operands where the right operand is the divisor and
the left operand is the dividend. */

let j = 10 / 4;
console.log(j);

let k = -10 / 4;
console.log(k);

let l = 10 / 0;
console.log(l);

let m = 10.0 / 0.0;
console.log(m);

let n = 10 / -0;
console.log(n);

// The modulus operator returns the remainder left over when a dividend is divided by a divisor.

let o = 10 % 4;
console.log(o);

let p = -10 % 4;
console.log(p);

let q = 10 % 0;
console.log(q);

let r = 10.0 % -4;
console.log(r);

let s = 10.5 % 4;
console.log(s);

// The exponentiation operator gives the result of raising the first operand to the power of the second operand.

let t = 10 ** 4;
console.log(t);

let u = -(10 ** 4);
console.log(u);

let v = 10 ** 0;
console.log(v);

let w = 10.0 ** -4;
console.log(w);

let x = 5 ** 4 ** 2; // 4 to the power of 2 then 5 to the power of (4 to the power of 2)
console.log(x);

let y = 5 ** 1 ** 4;
console.log(y);

let z = 3 ** 2 ** 2 ** 2;
console.log(z);

// The increment operator increments(adds one to) its operand and returns a value.

let aa = 10;
ab = aa++;

let ac = 10;
ad = ++ac;

console.log(aa);
console.log(ab);
console.log(ac);
console.log(ad);

// The decrement operator decrements(subtracts one from) its operand and returns a value.

let ae = 10;
af = ae++;

let ag = 10;
ah = ++ag;

console.log(ae);
console.log(af);
console.log(ag);
console.log(ah);

// This is a unary operator i.e.it operates on a single operand.It gives the negation of an operand.

let ai = 15;
aj = -ai;

let ak = -15;
al = -ak;

console.log(aj);
console.log(al);