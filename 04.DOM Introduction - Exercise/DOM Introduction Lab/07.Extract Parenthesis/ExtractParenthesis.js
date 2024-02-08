function extract(content) {
  let regex = /\([^()]*\)/g;
  let resultArr = [];

  let text = document.getElementById(content);

  let matches = text.textContent.match(regex);

  for (let each of matches) {
    let result = each.split("").slice(1, -1).join("");
    resultArr.push(result);
  }
  console.log(resultArr.join("; "));
  // return resultArr.join("; ");
}