// https://courses.ineuron.ai/JavaScript-Marathon

// primitive values
// undefined, null, strings, numbers: No change

let myString = "HiTeSh"
myString.toLowerCase()

// objects are mutable (you can change them)

let myObject = {name: "hitesh"}
myObject.name = "notHitesh"
myObject.lastName = "Choudhary"

// array are also mutable
let heroScore = [2, 4, 5, 6, 1]
heroScore[1] = 5

// objects are called as reference types
// reference is assigned

let arrayRef = [1, 2]

let anotherArrayRef = arrayRef

anotherArrayRef[0] = 5
// console.log(arrayRef);
// console.log(arrayRef === anotherArrayRef);

let yetAnotherArray = Array.from(arrayRef)
// console.log(yetAnotherArray === arrayRef);

// +++++++++++++++++++++++++++++++++++++++++++++

// type conversion
// JS gets what JS wants

10 + "objects"  // "10 objects"
"7" * "4" //28

let num = 1 - "x"
// console.log(num);
// console.log(num + " objects");

// true gets to 1
// false, "" gets to 0

// forcefull conversion

Number("3")
let infosysStock = 1600.4343
infosysStock.toFixed(2)

console.log(Boolean(""));
console.log(Boolean([99]));

// objects to primitive value
/* 
1. prefer-string
2. prefer-number
3. No-preference
 */

let colorValue = 14
let binaryColorValue = colorValue.toString(2)
// console.log(binaryColorValue);

// console.log({1: "one"}.toString());
let newDate = new Date(2022, 1, 1)
// console.log(newDate.valueOf());


// preferNumber => valueOf() => toString()

// [] => "" => 0