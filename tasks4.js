let word = "rottenApple";

let words = ["rottenApple", "rottenLemon"];
console.log(word.length);

console.log(word.startsWith("rotten"));

console.log(word.substring(6));

const search = "rotten";

for (let j = 0; j < words.length; j++) {
  if (words[j].startsWith(search)) {
    words[j] = words[j].substring(search.length).toLowerCase();
  }
}

console.log("Length" + words.length);

arr = [null];

// console.log(arr[0].length);
// console.log(arr);

function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}

let number = 32;
let massive = number.toString().split("");
console.log(massive);

console.log(number.toString().split(""));

for (let j = 0; j < massive.length - 1; j++) {
  if (parseInt(massive[j]) > parseInt(massive[j + 1])) {
  }
}

let myString = "man i need a taxi up to ubud";
let arrOfSt = myString.split(" ");
console.log(arrOfSt);

console.log(arrOfSt.sort());

arrOfSt.sort(function (a, b) {
  let indexA = a[a.length - 1];
  //console.log(indexA);
  let indexB = b[b.length - 1];
  //console.log(indexB);
  return indexA - indexB;
});

console.log(arrOfSt);

console.log("a" < "b");

let str2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let arr2 = [];

for (let j = 0; j < str2.length; j++) {
  let charCode = str2.charCodeAt(j);
  arr2.push(charCode);
}

console.log(arr2);

let total1 = arr2.join("");
console.log(total1);

let total2 = arr2.join("").replaceAll("7", "1");
console.log(total2);

let sum1 = 0;

for (let elem of total1) {
  sum1 += parseInt(elem);
}

let sum2 = 0;

for (let elem of total2) {
  sum2 += parseInt(elem);
}

let total = sum1 - sum2;

console.log(total);

let str3 = "wc";

let arr3 = [
  "25",
  "7",
  "8",
  "4",
  "14",
  "23",
  "8",
  "25",
  "23",
  "29",
  "16",
  "16",
  "4",
];

let alf = [];

for (let j = 122; j > 96; j--) {
  let s = String.fromCharCode(j);
  alf.push(s);
}

alf.push("!");
alf.push("?");
alf.push(" ");

let arrWithLetter = [];

for (let j = 0; j < arr3.length; j++) {
  let elem = parseInt(arr3[j]) - 1;
  arrWithLetter.push(alf[elem]);
}

console.log(alf);

console.log(arrWithLetter.join(""));

let x = "'man i need a taxi up to ubud'";

let arrSr = x
  .split(" ")
  .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

console.log(arrSr);
