console.log("he;;po")

// Unused variable
let unusedVar = 42;

function calculate(a, b) {
  // Used variable
  let result = a + b;

  // Dead code
  return result;
  console.log("This will never run");
}

// Dangerous function
eval("console.log('Executed via eval')");

// Cyclomatic complexity
function testComplexity(x) {
  if (x > 10) {
    console.log("Greater");
  } else if (x < 5) {
    console.log("Smaller");
  } else {
    console.log("Between");
  }

  for (let i = 0; i < 3; i++) {
    if (i % 2 === 0) {
      console.log("Even");
    }
  }

  switch (x) {
    case 1:
      break;
    case 2:
      break;
    default:
      break;
  }

  const func = new Function("return 2 + 2;");
  return func();
}
