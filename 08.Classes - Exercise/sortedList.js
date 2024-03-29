class List {
  constructor() {
    this.collection = [];
    this.size = this.collection.length;
  }

  add(element) {
    element = Number(element);
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.collection.length || typeof index !== "number") {
      throw new Error("Invalid index");
    } else {
      this.collection.splice(index, 1);
      this.collection.sort((a, b) => a - b);
      this.size--;
    }
  }

  get(index) {
    if (index < 0 || index >= this.collection.length || typeof index !== "number") {
      throw new Error("Invalid index");
    } else {
      return this.collection[index];
    }
  }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
