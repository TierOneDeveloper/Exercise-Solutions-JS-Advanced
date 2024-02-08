function sortArray(arr, order) {

  let result = order === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);

  return result
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));