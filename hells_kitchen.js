let sen = "What feck damn cake".toUpperCase();

console.log(sen);

//console.log(sen.toUpperCase());

const arr = sen.split("");

for (let j = 0; j < arr.length; j++) {
  if (arr[j] === "E" || arr[j] === "I" || arr[j] === "O" || arr[j] === "U") {
    arr[j] = "*";
  } else {
    if (arr[j] === "A") {
      arr[j] = "@";
    }
  }
}

console.log(arr);
let s = arr.join("");
let arr2 = s.split(" ");

console.log(arr2);

constNewArray = [];

for (let elem of arr2) {
  constNewArray.push(elem + "!!!!");
}

console.log(constNewArray);
