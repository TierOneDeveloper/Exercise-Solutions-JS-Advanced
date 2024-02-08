function solve() {
  let result = "";

  let text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  let textToLowerCase = text.toLowerCase();
  let textArr = textToLowerCase.split(" ");


  switch (convention) {
    case "Camel Case":
      let first = textArr.shift();
      result = first;
      for (let word of textArr) {
        result += word[0].toUpperCase() + word.substring(1);
      }
      document.getElementById("result").textContent = result;
      break;
    case "Pascal Case":
      textArr.forEach(el => result += el[0].toUpperCase() + el.substring(1));
      document.getElementById("result").textContent = result;

      break;
    default: document.getElementById("result").textContent = "Error!";
  }
}