function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchedString = document.getElementById("searchField").value;
      let tableRowsElements = document.querySelectorAll("tbody tr");
      let tableRowsElementsArray = Array.from(tableRowsElements);

      if (searchedString.length === 0 || searchedString === " ") {
         return;
      }
      for (let row of tableRowsElementsArray) {
         let tableDataCells = Array.from(row.children);
         for (let cell of tableDataCells) {
            if (cell.textContent.includes(searchedString)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");

            }
         }
      }
      document.getElementById("searchField").value = "";
   }
}