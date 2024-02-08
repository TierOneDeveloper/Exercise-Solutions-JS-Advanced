function extractIncreasingSubsequenceFromArray(arr) {

  let biggestOne = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] >= biggestOne) {
      biggestOne = arr[i];
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
 return arr;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
extractIncreasingSubsequenceFromArray([1, 2, 3, 4])
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1])