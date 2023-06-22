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
