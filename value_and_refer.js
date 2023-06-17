let number = 10;

function increase(number) {
  number++;
}

console.log(number);

let obj = { value: 10 };

function increaseRef(obj) {
  obj.value++;
}

increaseRef(obj);
console.log(obj);
