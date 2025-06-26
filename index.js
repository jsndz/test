// test-file.js

function sayHello(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

class Calculator {
  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) throw new Error("Division by zero");
    return x / y;
  }
}

const subtract = (a, b) => {
  return a - b;
};
