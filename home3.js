//ex1

const numbers = arrayFromRange(1, -3);

console.log(numbers);

function arrayFromRange(num1, num2) {
  const array = [];

  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }

  return array;
}

//ex2

const numbers2 = [1, 2, 3, 4, 5];

console.log(includes(numbers2, 2));

function includes(array, searchElement) {
  let isInclude = false;
  for (let j = 0; j < array.length; j++) {
    if (array[j] === searchElement) {
      isInclude = true;
      break;
    }
  }
  return isInclude;
}

//ex 3

const numbers3 = [1, 2, 2, 3, 4, 1, 1, 1, 1, 2];

const output = exept(numbers3, [1, 2]);

console.log(output);

function exept(array, excluded) {
  for (let j = 0; j < excluded.length; j++) {
    for (let number = 0; number < array.length; number++) {
      if (array[number] === excluded[j]) {
        array.splice(number, 1);
        number--;
      }
    }
  }
  return array;
}

function exeptWithNewArray(array, exclude) {
  const output = [];
  for (let element of array) {
    if (!exclude.includes(element)) {
      output.push(element);
    }
  }
  return output;
}
