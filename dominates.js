const arr = [1, 1, 1, 2, 2, 2, 2];
let halfAnArr = arr.length / 2;

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);

let sum = 1;
let elem = 0;

for (let j = 0; j < arr.length; j++) {
  if (sum > halfAnArr) {
    break;
  }
  if (arr[j] === arr[j + 1]) {
    sum++;
    elem = arr[j];
  } else {
    sum = 1;
    elem = 0;
  }
}

if (sum > halfAnArr) {
  console.log(elem);
} else {
  console.log(-1);
}
