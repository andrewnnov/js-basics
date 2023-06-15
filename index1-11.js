let name = "Andrew";
console.log(name);

//cannot be a reserve keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hyphen(-)
//Are case-sensitive

let firstName;
let lastName;

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//const
//if we want to reassine variable need to use let
const interestRateConst = 0.3;
//interestRateConst = 1;

//primitive types

let nameOfTeacher = "Mosh"; //String literal
let age = 30; //numbre literal
let isApproved = true; //boolean literal
let firstNameOfTeacher = undefined;
let lastNameOfTeacher = null;

//objects
let person = {
  name: "And",
  age: 34,
};

let selection = "name";
person.name = "John";
person["name"] = "Mary";

console.log(person);
