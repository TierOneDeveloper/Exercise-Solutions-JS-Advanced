function solution() {

  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  }

  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10
    }
  }

  return function manager(string) {
    let [action, order, quantity] = string.split(" ");
    quantity = Number(quantity);
    switch (action) {
      case "restock": return restock(order, quantity);
      case "prepare": return prepare(order, quantity);
      case "report": return report();
    }

  }

  function restock(order, quantity) {
    ingredients[order] += quantity;
    return "Success";
  }

  function prepare(order, quantity) {
    let preparedMicroelements = {};
    for (let [microelement, microelementQty] of Object.entries(recipes[order])) {
      let neededQty = microelementQty * quantity;
      if (ingredients[microelement] < neededQty) {
        return `Error: not enough ${microelement} in stock`;
      }
      preparedMicroelements[microelement] = neededQty;
    }
    for (let [el, value] of Object.entries(preparedMicroelements)) {
      ingredients[el] -= value;
    }
    return "Success";
  }

  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
  }
}

let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 1")); 

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


