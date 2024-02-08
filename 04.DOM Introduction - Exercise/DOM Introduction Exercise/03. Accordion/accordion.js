function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let textBox = document.getElementById("extra");

    if (textBox.style.display === "none") {
        textBox.style.display = "block";
        button.textContent = "Less";

    } else {
        textBox.style.display = "none";
        button.textContent = "More";
    }
}
