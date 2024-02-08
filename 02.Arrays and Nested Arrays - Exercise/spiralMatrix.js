function spiralMatrix(row, col) {

  const matrix = Array.from({ length: row }, () => []);

  let rowStart = 0;
  let colStart = 0;
  let rowEnd = row - 1;
  let colEnd = col - 1
  let element = 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {

    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = element;
      element++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = element;
      element++
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = element;
      element++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = element;
      element++;
    }
    colStart++;
  }
  for (each of matrix) {
    let newLine = each.join(" ");
    console.log(newLine);
  }
}

spiralMatrix(5, 5)
spiralMatrix(3, 3);