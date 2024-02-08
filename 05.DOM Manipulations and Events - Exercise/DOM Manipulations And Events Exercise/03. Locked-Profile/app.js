function lockedProfile() {

    const showMoreBtnsArray = Array.from(document.querySelectorAll("button"));

    for (let button of showMoreBtnsArray) {
        button.addEventListener("click", showMore);
    }

    function showMore(e) {
        let hiddenDiv = e.target.parentElement.querySelector("div");
        let radioBtn = e.target.parentElement.querySelector("input[type='radio']:checked");

        if (radioBtn.value === "unlock") {
            if (e.target.textContent === "Show more") {
                e.target.textContent = "Hide it";
                hiddenDiv.style.display = "block";
            } else {
                e.target.textContent = "Show more";
                hiddenDiv.style.display = "none";
            }
        }
    }
}