let str = "world";
console.log(reverseString1(str));

function reverseString1(str) {
  let reverseString = str.split("").reverse().join("");
  return reverseString;
}

let str1 = "hello";
console.log(reverseString2(str1));

function reverseString2(str) {
  let reverseString = "";
  for (let j = str.length - 1; j >= 0; j--) {
    reverseString += str[j];
  }
  return reverseString;
}

let sentence = "I am an expert at this";

let newSentence = sentence.split(" ").reverse().join(" ");
console.log(newSentence);

let str3 = "Hello world!";

console.log(str3.slice(1, -1));

console.log(repeatString(10, "Hello"));

function repeatString(n, s) {
  return s.repeat(n);
}

let stringOfGoals = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

let sum = 0;

for (let element of stringOfGoals) {
  let elementOfInt = element.split(":");
  if (elementOfInt[0] > elementOfInt[1]) sum += 3;
  if (elementOfInt[0] === elementOfInt[1]) sum += 1;
}

console.log("sum= " + sum);

let arr = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];

// let arr2 = arr.sort()[0].split("");

// console.log(arr2);

// for (let j = 0; j < arr2.length - 1; j++) {
//   arr2[j] = arr2[j] + "***";
// }

// console.log(arr2.join(""));

let whatIsIt = arr.sort()[0].split("").join("***");
console.log(whatIsIt);
