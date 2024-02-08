function addItem() {

    let dropMenuRef = document.getElementById("menu");
    let textInputRef = document.getElementById("newItemText");
    let textValueRef = document.getElementById("newItemValue");

    let newOption = document.createElement("option");

    newOption.textContent = textInputRef.value;
    newOption.value = textValueRef.value;

    dropMenuRef.appendChild(newOption);

    textInputRef.value = "";
    textValueRef.value = "";

    let resultDivElement = document.createElement("div");
    resultDivElement.textContent = newOption.value;

    let bodyEl = document.querySelector("body");

    bodyEl.appendChild(resultDivElement);

}