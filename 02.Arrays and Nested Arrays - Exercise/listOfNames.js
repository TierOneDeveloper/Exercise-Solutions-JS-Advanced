function listOfNames(list) {

  list.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}.${list[i]}`);
  }
}


listOfNames(["John", "Bob", "Christina", "Ema"])

