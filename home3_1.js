const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);
console.log(output);

function move(array, index, offset) {
  //output = []

  if (
    index >= array.length ||
    index < 0 ||
    offset >= array.length ||
    offset < 0
  ) {
    console.error("Invalid");
    return array;
  } else {
    let tmp = array[index];
    array[index] = array[offset];
    array[offset] = tmp;
  }

  return array;
}

const numbers1 = [1, 2, 3, 4];
const output1 = moveMosh(numbers1, 2, 3);

function moveMosh(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
