function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = firstNumber - secondNumber;

    document.getElementById("result").textContent = result;
}