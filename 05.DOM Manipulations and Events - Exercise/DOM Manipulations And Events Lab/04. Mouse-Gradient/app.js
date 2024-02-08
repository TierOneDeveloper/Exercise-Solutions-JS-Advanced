function attachGradientEvents() {

    let boxArea = document.getElementById("gradient");
    let result = document.getElementById("result");

    boxArea.addEventListener("mousemove", showPosition);
    boxArea.addEventListener("mouseout", hidePosition);


    function showPosition(event) {
        const boxWidth = event.target.clientWidth;
        const mousePosition = event.offsetX / (boxWidth - 1);
        const percentage = Math.trunc(mousePosition * 100);
        result.textContent = `${percentage}%`;
    }

    function hidePosition() {
        result.textContent = "";
    }
}