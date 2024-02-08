function generateReport() {

    let tableBodyRows = document.querySelectorAll("tbody tr");
    let arrayTableBodyRows = Array.from(tableBodyRows);

    let tableFooterCells = document.querySelectorAll("thead tr th");
    let arraytableFooterCells = Array.from(tableFooterCells);

    let counter = 0;
    let result = [];

    for (let i = 0; i < arraytableFooterCells.length; i++) {
        let checkbox = arraytableFooterCells[i].querySelector("input");
        let propertyName = arraytableFooterCells[i].textContent.toLowerCase().trim();

        if (checkbox.checked) {
            counter++;
            for (let j = 0; j < arrayTableBodyRows.length; j++) {
                let dataCellsArray = Array.from(arrayTableBodyRows[j].querySelectorAll("td"));
                if (counter === 1) {
                    let person = {
                        [propertyName]: dataCellsArray[i].textContent
                    }
                    result.push(person);
                } else {
                    Object.defineProperty(result[j], propertyName, {
                        value: dataCellsArray[i].textContent,
                        enumerable: true,
                    });
                }
            }
        }
    }

    let output = document.getElementById("output");
    output.textContent = JSON.stringify(result);
}