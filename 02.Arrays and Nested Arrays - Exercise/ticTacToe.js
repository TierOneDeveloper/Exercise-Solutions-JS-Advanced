function ticTacToe(moves) {
  let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
  let checkBoard = 0;

  for (let i = 0; i < moves.length; i += 2) {
    let [firstX, firstY] = moves[i].split(" ").map(Number);
    let [secondX, secondY] = moves[i + 1].split(" ").map(Number);

    if (dashboard[firstX][firstY] === "O" || dashboard[firstX][firstY] === "X") {
      console.log("This place is already taken. Please choose another!");
      let y = i + 2;
      [firstX, firstY] = moves[y].split(" ").map(Number);
      i++;
      dashboard[firstX][firstY] = "X";
      checkBoard++;
      continue;
    }
    dashboard[firstX][firstY] = "X";
    checkBoard++;


    if (
      (dashboard[0][0] === "X" & dashboard[0][1] === "X" & dashboard[0][2] === "X") ||
      (dashboard[1][0] === "X" & dashboard[1][1] === "X" & dashboard[1][2] === "X") ||
      (dashboard[2][0] === "X" & dashboard[2][1] === "X" & dashboard[2][2] === "X") ||

      (dashboard[0][0] === "X" & dashboard[1][0] === "X" & dashboard[2][0] === "X") ||
      (dashboard[0][1] === "X" & dashboard[1][1] === "X" & dashboard[2][1] === "X") ||
      (dashboard[0][2] === "X" & dashboard[1][2] === "X" & dashboard[2][2] === "X") ||

      (dashboard[0][0] === "X" & dashboard[1][1] === "X" & dashboard[2][2] === "X") ||
      (dashboard[2][0] === "X" & dashboard[1][1] === "X" & dashboard[0][2] === "X")) {
      console.log("Player X wins!");
      break;
    }

    if (checkBoard === 9) {
      console.log("The game ended! Nobody wins :(");
      break;
    }

    if (dashboard[secondX][secondY] === "X" || dashboard[firstX][firstY] === "O") {
      console.log("This place is already taken. Please choose another!");
      let y = i + 2;
      [secondX, secondY] = moves[y].split(" ").map(Number);
      i++;
      dashboard[secondX][secondY] = "O";
      checkBoard++;
      continue;
    }
    dashboard[secondX][secondY] = "O";
    checkBoard++;

    if (
      (dashboard[0][0] === "O" & dashboard[0][1] === "O" & dashboard[0][2] === "O") ||
      (dashboard[1][0] === "O" & dashboard[1][1] === "O" & dashboard[1][2] === "O") ||
      (dashboard[2][0] === "O" & dashboard[2][1] === "O" & dashboard[2][2] === "O") ||

      (dashboard[0][0] === "O" & dashboard[1][0] === "O" & dashboard[2][0] === "O") ||
      (dashboard[0][1] === "O" & dashboard[1][1] === "O" & dashboard[2][1] === "O") ||
      (dashboard[0][2] === "O" & dashboard[1][2] === "O" & dashboard[2][2] === "O") ||

      (dashboard[0][0] === "O" & dashboard[1][1] === "O" & dashboard[2][2] === "O") ||
      (dashboard[2][0] === "O" & dashboard[1][1] === "O" & dashboard[0][2] === "O")) {
      console.log("Player O wins!");
      break;
    }

    if (checkBoard === 9) {
      console.log("The game ended! Nobody wins :(");
      break;
    }
  }

  dashboard.forEach((el) => console.log(el.join("\t")));
}


ticTacToe(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0"])

console.log("-------------------------------------");

ticTacToe(["0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1"])

console.log("-------------------------------------");

ticTacToe(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0"])