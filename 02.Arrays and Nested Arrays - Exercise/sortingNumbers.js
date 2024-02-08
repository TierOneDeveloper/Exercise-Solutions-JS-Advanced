function sortingNumbers(numbers) {
  let numbersCopy = numbers.slice();
  let result = [];
  numbersCopy.sort((a, b) => a - b);

  while (numbersCopy.length !== 0) {
    let min = Math.min(...numbersCopy);
    let max = Math.max(...numbersCopy);

    result.push(min);
    numbersCopy.shift();
    result.push(max);
    numbersCopy.pop();
  }

  if (numbers.length % 2 !== 0) {
    result.pop();
    return result;
  } else {
    return result;
  };
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21,]));