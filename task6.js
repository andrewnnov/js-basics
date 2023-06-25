//const myArray = [6, 2, 3, 4, 5];
//const myArray = [14, 32, 3, 5, 5];
//const myArray = ["Banana", "Orange", "Apple", "Mango", 0, 2, 2];
//const myArray = ["Banana", "Orange", "Apple", "Mango"];

const myArray = [
  "Apple",
  46,
  "287",
  574,
  "Peach",
  "3",
  "69",
  78,
  "Grape",
  "423",
];

// myArray.sort(function (a, b) {
//   return a - b;
// });

const arrS = [];
const arrN = [];

for (let elem of myArray) {
  if (typeof elem === "string") {
    arrS.push(elem);
  } else {
    arrN.push(elem);
  }
}

console.log(arrS);
console.log(arrN);

arrN.sort(function (a, b) {
  return a - b;
});

arrS.sort();

arrTotal = [...arrN, ...arrS];

console.log(arrTotal);

//anotht method

let num = myArray.filter((x) => typeof x === "number").sort((a, b) => a - b);
let str = myArray.filter((x) => typeof x === "string").sort();

console.log(num);
console.log(str);

console.log(num.concat(str));
