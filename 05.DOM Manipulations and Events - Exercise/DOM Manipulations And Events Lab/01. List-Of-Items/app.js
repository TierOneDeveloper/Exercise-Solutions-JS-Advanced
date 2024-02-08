function addItem() {

    let textInputValue = document.getElementById("newItemText").value;
    let items = document.getElementById("items");
    let liElement = document.createElement("li");

    if (textInputValue.length === 0) {
        return;
    } else {
        liElement.textContent = textInputValue;
        items.appendChild(liElement);
        document.getElementById("newItemText").value = "";
    }

}