// function solution(x) {
//   let num = x

//   return (n) => { return num + n }
// }

// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));


function solve(x) {
  let y = x;
  return (z) => {
    return y + z;
  }
}

let add7 = solve(7);
console.log(add7(2));
console.log(add7(3));