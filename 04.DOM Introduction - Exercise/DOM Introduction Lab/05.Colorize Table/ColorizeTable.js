function colorize() {
    let tableRows = document.getElementsByTagName("tr");

    for (let i = 1; i < tableRows.length; i += 2) {
        tableRows[i].style.background = "teal";
    }
}