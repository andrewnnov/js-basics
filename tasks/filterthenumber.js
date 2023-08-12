const st = "y108z74";

let stArr = st.split("");
console.warn(stArr);

const onlyNumb = [];

for (let j = 0; j < stArr.length; j++) {
  if (parseInt(stArr[j]) === 0 || parseInt(stArr[j])) {
    onlyNumb.push(parseInt(stArr[j]));
  }
}

console.log(onlyNumb.join(""));

console.warn(filtering(st));

function filtering(value) {
  return parseInt(value.replace(/\d]/g, ""));
}
