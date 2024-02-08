function solve() {
  let textContent = document.getElementById("input").value;
  let sentencesArr = textContent.split(".");
  let filtered = sentencesArr.filter((el) => el.length !== 0);

  while (filtered.length !== 0) {
    let pElement = document.createElement("p");
    let pContentArr = [];
    for (let i = 0; i < 3; i++) {
      if (filtered.length === 0) {
        break;
      }
      pContentArr.push(filtered.shift());
    }
    pContentArr = pContentArr.join(".");
    pElement.textContent = pContentArr + ".";
    let output = document.getElementById("output");
    output.appendChild(pElement);
  }
}
