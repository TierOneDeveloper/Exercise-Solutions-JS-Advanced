function validate() {
    const validatePattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("change", onChange);

    function onChange(e) {
        let email = e.target.value;
        if (validatePattern.test(email)) {
            e.target.classList.remove("error")
        }
        else {
            e.target.classList.add("error");
        }
    }
}