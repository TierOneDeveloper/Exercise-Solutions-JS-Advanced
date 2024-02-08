function magicMatrices(matrix) {
  let rowSum = [];
  let colSum = [];
  let currentRowSum = 0;
  let currentColSum = 0;

  let isMagic = true;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      currentRowSum += matrix[i][j];
      currentColSum += matrix[j][i];
    }
    rowSum.push(currentRowSum);
    colSum.push(currentColSum);
    currentRowSum = 0;
    currentColSum = 0;
  }

  let allSums = [...rowSum, ...colSum];

  function checkArrayEqualElements(_array) {
    for (var i = 1; i < _array.length; i++) {
      if (_array[i] !== _array[0]) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  console.log(checkArrayEqualElements(allSums));
}


magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);

magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
