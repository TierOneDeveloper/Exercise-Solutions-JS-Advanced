function getFibonator() {
  let x = 0;
  let y = 1;

  return () => {
    let sum = x + y;
    x = y
    y = sum
    return x;
  }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
