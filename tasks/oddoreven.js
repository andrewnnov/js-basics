const arr = [0, 1, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

function oddOrEven(array) {
  return array.reduce((acc, sum) => acc + sum, 0) % 2 ? "odd" : "even";
}
