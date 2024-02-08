function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    let object = {

        init(firstNum, secondNum, result) {
            selector1 = document.querySelector(`${firstNum}`);
            selector2 = document.querySelector(`${secondNum}`);
            resultSelector = document.querySelector(`${result}`);
        },

        add() {
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },

        subtract() {
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    }
    return object;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result')






