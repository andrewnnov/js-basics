//arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

//functions
//perform a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");
greet("Mary");

//calculate a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

let x = 10;
let y = 3;

console.log(++x);

//strict equality (type + value)
console.log(1 === 1);
console.log("1" === 1);

//lose equality (value)
console.log(1 == 1);
console.log(true == 1);

//if a customer has more than 100 points,
//they are a gold customer, otherwise,
//they are silver customers
let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

//logical and (&&) return TRUE if both operands is true
console.log(true && true);
console.log(true && false);

let highIncome = true;
let goodCreditsScore = true;

let eligibleForLoan = highIncome && goodCreditsScore;
console.log(eligibleForLoan);

//Falsy (not false)
//undefined
//null
//0
//false
//''
//NaN

//Anything that is not Falsy -> Truthy

//short-circuting
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

//bitwise operators

console.log(1 | 2); //betwise OR

//1 = 00000001
//2 = 00000010
//R = 00000011

console.log(1 & 2); //bitwise AND

//1 = 00000001
//2 = 00000010
//R = 00000000

//access control system
//read, write, execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
