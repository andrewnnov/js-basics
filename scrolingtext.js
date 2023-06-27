let string = "abc";
const arr = string.split("");
console.log(arr);

const arrOfWords = [];
arrOfWords[0] = string.toUpperCase();

for (let j = 1; j < arr.length; j++) {
  let firstElem = arr.shift();
  arr.push(firstElem);
  arrOfWords.push(arr.join("").toUpperCase());
}

console.log(arrOfWords);
