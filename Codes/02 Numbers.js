// integer literals

/* 0
100
0xff => 255
0b, 0B */

// Floating point literals
/* 
1.9
3.14

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000
 */

// Arithmetic
// +, -, *, /, %, **

Math.pow(2, 9)
Math.pow(3, 1/3)
Math.round(.6)
Math.ceil(.6)
Math.floor(.6)
Math.abs(-5)
Math.min(2, 3, 7, 4, 8)
Math.max(2, 3, 7, 4, 8)
Math.random()

// ES6 new methods
Math.cbrt(27)
Math.hypot(3, 4)
Math.clz32(0xf)

// Infinity, no errors; just Infinity
// divide by 0; it's just NaN

Number.MAX_SAFE_INTEGER
// console.log(Number.isNaN("2"));
//console.log(Number.parseInt("3a"));
//console.log(Number.isNaN("3a"));

let statementOne = .3 - .2
let statementTwo = .2 - .1

// console.log(statementOne === statementTwo);
// console.log(statementOne === .1);
// console.log(statementTwo === .1);
// console.log(.3 - .2);
// console.log(.2 - .1);

// BigInt

let googol = "1" + "0".repeat(100)
console.log(BigInt(googol));