// let a = "a";

// console.log(a === a.toLowerCase());

// let word1 = "abc";
// let word2 = "bc";

// console.log(word1[word1.length - 1]);

// console.log(word2[word2.length - 1]);

let str = "abcd";
let ending = "cd";
console.log(solution(str, ending));

function solution(str, ending) {
  return str.endsWith(ending);
}

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

arr = [1, 0, 1, 1];

let number = arr.join("");
console.log(parseInt(number, 2));

console.log(5 / 2);

let word = "test";
console.log(word.substring(1, 3));
