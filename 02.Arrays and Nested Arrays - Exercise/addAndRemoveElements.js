function addAndRemoveElements(commands) {
  let myArr = [];
  let number = 0;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "add") {
      number++;
      myArr.push(number);

    } else if (commands[i] === "remove") {
      number++;
      myArr.pop();
    }
  }
  let result = myArr.length === 0 ? console.log("Empty") : myArr.forEach((el) => console.log(el));
}

addAndRemoveElements(['add',
  'add',
  'add',
  'add']
)

addAndRemoveElements(['add',
  'add',
  'remove',
  'add',
  'add']
)

addAndRemoveElements(['remove',
  'remove',
  'remove']
)
