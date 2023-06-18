const numbers = [4, 5, 6, 2, 3, 1];

const count = countOccurrences(numbers, -1);
console.log(count);

function countOccurrences(array, searchElement) {
  const output = array.reduce((accum, current) => {
    if (current === searchElement) {
      accum++;
    }
    return accum;
  }, 0);

  return output;
}

const max = getMax(numbers);
console.log(max);

function getMax(array) {
  let max = array[0];
  for (let j = 1; j < array.length; j++) {
    if (array[j] > max) {
      max = array[j];
    }
  }
  return max;
}

const maxRed = getMaxReduce(numbers);
console.log(maxRed);

function getMaxReduce(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
