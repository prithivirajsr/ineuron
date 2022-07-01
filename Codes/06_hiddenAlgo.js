10 + " mangoes"  // "10 mangoes"
"7" * "4"  // 28


console.log(Number("3"))
console.log(Number(""))
console.log(Number([99]))


// objects to primitive value
/* 
1. prefer-string
2. prefer-number
3. no-preference
 */

// toString() || valueOf()

let colorValue = 9
let binaryColorValue = colorValue.toString(2)
console.log(binaryColorValue);

console.log({1: "one"}.toString());


let newDate = new Date(2022, 3, 4)
//let dateString = newDate.toString();
console.log(newDate.valueOf());