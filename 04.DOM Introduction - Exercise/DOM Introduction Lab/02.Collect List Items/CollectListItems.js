function extractText() {
    let items = document.getElementById("items");
    let list = items.children;
    let listArray = Array.from(list);

    let textArea = document.getElementById("result");
    let result = [];

    for (let each of listArray) {
        result.push(each.textContent);
    }
    textArea.value = result.join(" \n");

}