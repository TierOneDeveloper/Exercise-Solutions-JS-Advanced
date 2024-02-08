function argumentInfo(...arguments) {

  let numbersOfType = {};

  for (let argument of arguments) {
    let type = typeof argument;

    if (!numbersOfType.hasOwnProperty(type)) {
      numbersOfType[type] = 0;
    }
    numbersOfType[type]++;
    console.log(`${type}: ${argument}`);
  }

  let entries = Object.entries(numbersOfType).sort((a,b) => b[1] - a[1]);
  entries.forEach(el => console.log(`${el[0]} = ${el[1]}`));
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)