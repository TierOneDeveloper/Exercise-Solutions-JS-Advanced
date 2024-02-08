function createSortedList() {

  let result = {

    _sortList: [],
    _sort: function (a, b) { return a - b },

    size: 0,

    add(el) {

      if (typeof (el) !== "number" || isNaN(el)) {
        return;
      }
      this._sortList.push(Number(el));
      this._sortList.sort(this._sort);
      this.size = this._sortList.length;
    },

    remove(index) {
      if (index >= this._sortList.length || index < 0) {
        return;
      }
      this._sortList.splice(index, 1);
      this._sortList.sort(this._sort);
      this.size = this._sortList.length;
    },

    get(index) {
      if (index >= this._sortList.length || index < 0) {
        return;
      }

      return this._sortList[index];
    }

  }

  return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));




