console.log(validParen(")("));

function validParen(parenStr) {
  let curr = 0;
  for (let j = 0; j < parenStr.length; j++) {
    if (parenStr[j] === "(") {
      curr++;
    } else {
      curr--;
    }

    if (curr < 0) {
      return false;
    }
  }

  return curr === 0;
}
