function focused() {
    let inputsArray = Array.from(document.querySelectorAll("input"));

    function focusInput(event) {
        let currentInput = event.target;
        currentInput.parentElement.classList.add("focused");
    }

    function blurInput(event) {
        let currentInput = event.target;
        currentInput.parentElement.classList.remove("focused");
    }

    for (let each of inputsArray) {
        each.addEventListener("focus", focusInput);
        each.addEventListener("blur", blurInput);
    }

}