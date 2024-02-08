function calc() {

    let firstNum = document.getElementById("num1");
    let secondNum = document.getElementById("num2");
    let summary = document.getElementById("sum");
    summary.value = Number(firstNum.value) + Number(secondNum.value);
}
