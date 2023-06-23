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
const arrNum = [];
const arrStr = [];

for (let elem of myArray) {
  if (typeof elem === "string") {
    arrStr.push(elem);
  } else {
    arrNum.push(elem);
  }
}

console.log(arrNum);
console.log(arrStr);

arrStr.sort();
arrNum.sort(function (a, b) {
  a - b;
});

console.log(arrNum);
console.log(arrStr);

const combinedArray = [...arrNum, ...arrStr];

console.log(combinedArray);

//console.log(myArray);
