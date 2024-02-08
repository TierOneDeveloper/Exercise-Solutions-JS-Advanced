function jansNotation(input) {

  let notation = { operands: [] }

  for (let each of input) {
    if (typeof each === "number") {
      notation.operands.push(each);

    } else if (notation.operands.length >= 2) {
      let [first, second] = notation.operands.slice(-2);
      switch (each) {
        case "*":
          let product = first * second;
          notation.operands.splice(-2, 2, product);
          break;
        case "/":
          let quotient = first / second;
          notation.operands.splice(-2, 2, quotient);
          break;
        case "+":
          let sum = first + second;
          notation.operands.splice(-2, 2, sum);
          break;
        case "-":
          let difference = first - second;
          notation.operands.splice(-2, 2, difference);
          break;
      }

    } else {
      console.log("Error: not enough operands!");
      return;
    }
  }

  if (notation.operands.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(notation.operands[0]);
  }
}

jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);

// jansNotation([31, 2, "+", 11, "/"])

// jansNotation([3, 4, '+'])

// jansNotation([5, 3, 4, '*', '-'])

// jansNotation([7, 33, 8, '-'])

// jansNotation([15, '/'])
