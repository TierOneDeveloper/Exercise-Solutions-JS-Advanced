function solve() {

  const [textInput, resultOuput] = document.querySelectorAll("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const tableBodyRef = document.querySelector("table tbody");

  generateBtn.addEventListener("click", generateFurniture);
  buyBtn.addEventListener("click", buyFurniture);

  function generateFurniture() {
    let furnitureObjectsArray = JSON.parse(textInput.value);

    for (let object of furnitureObjectsArray) {
      const newTableRow = document.createElement("tr");
      tableBodyRef.appendChild(newTableRow);
      newTableRow.innerHTML += `<td><img src="${object.img}"></td>`;
      newTableRow.innerHTML += `<td><p>${object.name}</p></td>`;
      newTableRow.innerHTML += `<td><p>${object.price}</p></td>`;
      newTableRow.innerHTML += `<td><p>${object.decFactor}</p></td>`;
      newTableRow.innerHTML += `<td><input type="checkbox"/></td>`;
    }
  }

  function buyFurniture() {
    const tableRowsArray = Array.from(document.querySelectorAll("tbody tr"));

    let result = {
      furniture: [],
      price: 0,
      decFac: 0
    }

    for (let row of tableRowsArray) {
      if (row.children[4].children[0].checked) {
        result.furniture.push(row.children[1].children[0].textContent);
        result.price += Number(row.children[2].children[0].textContent);
        result.decFac += Number(row.children[3].children[0].textContent);
      }
    }
    resultOuput.textContent = `Bought furniture: ${result.furniture.join(", ")}\nTotal price: ${(result.price).toFixed(2)}\nAverage decoration factor: ${result.decFac / result.furniture.length}`;
  }
}