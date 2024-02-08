function add(num) {
  let sum = 0;

  function recursive(x) {
    sum += x
    return recursive
  }

  recursive.toString = function () { return sum; }

  return recursive(num)
}


// add(1)
add(1)(6)(-3)
// console.log(add(1)(6)(-3));
