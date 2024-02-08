function getArticleGenerator(articles) {
    const contentDiv = document.getElementById("content");

    function showNext() {
        if (articles.length != 0) {
            const currentArticle = document.createElement("article");
            currentArticle.textContent = articles.shift();
            contentDiv.appendChild(currentArticle);
        }
    }

    return showNext;
}
