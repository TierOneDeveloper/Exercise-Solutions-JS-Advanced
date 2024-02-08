function validate() {
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const usernameInputRef = document.getElementById("username");

    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    const emailInputRef = document.getElementById("email");

    const passwordPattern = /^[\w]{5,15}$/;
    const passwordInputRef = document.getElementById("password");
    const confirmPasswordInputRef = document.getElementById("confirm-password");

    const checkboxInputRef = document.getElementById("company");
    const companyInfoFieldRef = document.getElementById("companyInfo");
    const companyNumberInputRef = document.getElementById("companyNumber");

    const submitBtnRef = document.getElementById("submit");
    const validDivRef = document.getElementById("valid");

    let validName = false;
    let validEmail = false;
    let validPassword = false;
    let validCompanyNumber = false;


    checkboxInputRef.addEventListener("change", (e) => {
        if (checkboxInputRef.checked) {
            companyInfoFieldRef.style.display = "block";
        } else {
            companyInfoFieldRef.style.display = "none";
        }
    })

    submitBtnRef.addEventListener("click", (e) => {
        e.preventDefault();

        if (!usernamePattern.test(usernameInputRef.value)) {
            usernameInputRef.style.borderColor = "red";
            validName = false;
        }
        else {
            usernameInputRef.style.border = "";
            validName = true;
        }

        if (!emailPattern.test(emailInputRef.value)) {
            emailInputRef.style.borderColor = "red";
            validEmail = false;
        }
        else {
            emailInputRef.style.border = "";
            validEmail = true;
        }

        if (passwordInputRef.value === confirmPasswordInputRef.value && passwordPattern.test(confirmPasswordInputRef.value) && passwordPattern.test(passwordInputRef.value)) {
            confirmPasswordInputRef.style.border = "";
            passwordInputRef.style.border = "";
            validPassword = true;
        } else {
            confirmPasswordInputRef.style.borderColor = "red";
            passwordInputRef.style.borderColor = "red";
            validPassword = false;
        }

        if (checkboxInputRef.checked) {
            if (companyNumberInputRef.value < 1000 || companyNumberInputRef.value > 9999) {
                companyNumberInputRef.style.borderColor = "red";
                validCompanyNumber = false;

            } else {
                companyNumberInputRef.style.border = "";
                validCompanyNumber = true;
            }
        }

        if (checkboxInputRef.checked) {
            if (validName && validEmail && validPassword && validCompanyNumber) {
                validDivRef.style.display = "block";
            } else {
                validDivRef.style.display = "none";
            }
        } else {
            if (validName && validEmail && validPassword) {
                validDivRef.style.display = "block";
            } else {
                validDivRef.style.display = "none";
            }
        }
    });
}

