function deleteByEmail() {
    const textInputValue = document.querySelector("label input");
    let tableBody = document.querySelector("tbody");
    const tableBodyRows = document.querySelectorAll("tbody tr");
    const result = document.getElementById("result");
    let ArraytableBodyRows = Array.from(tableBodyRows);

    for (let row of ArraytableBodyRows) {
        let emailDataCell = Array.from(row.querySelectorAll("td"))[1];

        if (emailDataCell.textContent === textInputValue.value) {
            tableBody.removeChild(row);
            result.textContent = "Deleted";
            textInputValue.value = "";
        } else {
            result.textContent = "Not found.";
        }
    }
}