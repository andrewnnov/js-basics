const validation = /[a-z0-9_]{4,16}/;

const expr1 = "aTsd43_34";

console.log(validation.exec(expr1) !== null);
