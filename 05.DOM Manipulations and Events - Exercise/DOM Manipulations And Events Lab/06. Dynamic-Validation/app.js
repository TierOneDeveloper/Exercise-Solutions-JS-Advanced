function validate() {

    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    
    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", validEmail);

    function validEmail(event) {
        if (regex.test(event.target.value)) {
            event.target.classList.remove("error");
        } else {
            event.target.classList.add("error");
        }
    }
}
