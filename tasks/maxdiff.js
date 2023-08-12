const arr1 = [1, 2, 3, 4];
const arr = [1, 2, 3, -4];

const list = [16];
const list1 = [-0, 1, 2, -3, 4, 5, -6];
console.log(maxxDiff(list1));

function maxxDiff(list) {
  if (list.length === 0 || list.length === 1) {
    return 0;
  } else {
    list.sort((a, b) => a - b);

    return list[list.length - 1] - list[0];
  }
}

console.log(maxDiffBP(list1));

function maxDiffBP(list) {
  if (!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
}
