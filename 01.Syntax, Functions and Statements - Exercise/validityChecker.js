function validityChecker(x1, y1, x2, y2) {

  let firstPointDistance = Math.sqrt(Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2));
  let secondPointDistance = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
  let twoPointsDistance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

  if (Number.isInteger(firstPointDistance)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(secondPointDistance)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(twoPointsDistance)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)