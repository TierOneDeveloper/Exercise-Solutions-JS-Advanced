function attachEventsListeners() {

    const buttonsRef = document.querySelectorAll('input[type = "button"]');
    let buttonsRefArray = Array.from(buttonsRef);


    for (let eachButton of buttonsRefArray) {
        eachButton.addEventListener("click", convertHandler);
    }

    function convertHandler(e) {

        let currentInputField = e.currentTarget.parentElement.children[1];
        let currentInputFieldValue = currentInputField.value;
        currentInputFieldValue = Number(currentInputFieldValue);
        let unit = currentInputField.id;

        switch (unit) {

            case "days": convertToOneUnit(currentInputFieldValue);
                break;

            case "hours": convertToOneUnit(currentInputFieldValue / 24);
                break;

            case "minutes": convertToOneUnit(currentInputFieldValue / 24 / 60);
                break;

            case "seconds": convertToOneUnit(currentInputFieldValue / 24 / 60 / 60);
                break;
        }
    }


    function convertToOneUnit(inputValue) {
        let inputFieldsRef = document.querySelectorAll('input[type="text"]');

        inputFieldsRef[0].value = inputValue;
        inputFieldsRef[1].value = inputValue * 24;
        inputFieldsRef[2].value = inputValue * 24 * 60;
        inputFieldsRef[3].value = inputValue * 24 * 60 * 60;
    }
}