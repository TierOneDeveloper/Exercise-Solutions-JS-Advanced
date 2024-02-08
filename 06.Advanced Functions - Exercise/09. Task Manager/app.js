function solve() {
    const formRef = document.querySelector("form");
    const [addSection, openSection, inProgressSection, completeSection] = document.querySelectorAll("section");

    let actions = {
        start: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            inProgressSection.children[1].appendChild(currentArticle);
            e.target.parentElement.remove();
            currentArticle.innerHTML += getButtonPart({ class: "red", text: "Delete" }, { class: "orange", text: "Finish" });
            let btns = currentArticle.querySelectorAll("button");
            addEventListenerToButton(btns);
            debugger
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            e.target.parentElement.remove();
            completeSection.children[1].appendChild(currentArticle);
            debugger
        },
        delete: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            currentArticle.remove();
            debugger
        }
    }

    formRef.addEventListener("submit", onSubmitHandler);

    function onSubmitHandler(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let task = formElements[0].value;
        let description = formElements[1].value;
        let date = formElements[2].value;

        if (!task || !description || !date) {
            return;
        }

        createArticle(task, description, date);

        formElements[0].value = "";
        formElements[1].value = "";
        formElements[2].value = "";
    }

    function createArticle(task, description, date) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemplate(task, description, date);
        openSection.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToButton(btns);
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickHandler));
    }

    function clickHandler(e) {
        let currentAction = e.target.innerText.toLowerCase();
        actions[currentAction](e);
    }

    function getArticleTemplate(task, description, date) {
        return `<h3>${task}</h3>` +
            `<p>Description: ${description}</p>` +
            `<p>Due Date: ${date}</p>` +
            getButtonPart({ class: "green", text: "Start" }, { class: "red", text: "Delete" });
    }

    function getButtonPart(firstBtn, secondBtn) {
        return `<div class="flex">` +
            `<button class=${firstBtn.class}>${firstBtn.text}</button>` +
            `<button class=${secondBtn.class}>${secondBtn.text}</button>` +
            `</div>`
    }
}