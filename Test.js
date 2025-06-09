import { readFileSync, existsSync } from 'fs'; // 'existsSync' is unused

const a = 5;
let b = 10;
var c = 15;
var unused =20;

function add(x, y) {
  const temp = x + y;
  return temp;
}

function unusedFunc(p) {
  const inner = p * 2;
  return 42;
}

try {
  throw new Error("oops");
} catch (err) {
  console.log("Handled");
}

console.log(a);
console.log(add(b, c));


