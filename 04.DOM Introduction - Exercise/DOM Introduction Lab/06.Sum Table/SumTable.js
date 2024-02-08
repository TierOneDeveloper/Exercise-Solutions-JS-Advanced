function sumTable() {
  let sum = [];

  let prices = document.querySelectorAll("td:nth-child(even)");
  let result = document.getElementById("sum");

  let pricesArray = Array.from(prices);
  pricesArray.pop();

  for (let each of pricesArray) {
    let currentPrice = Number(each.textContent);
    sum.push(currentPrice);
  }

  sum = sum.reduce((acc, el) => acc + el);
  result.textContent = sum;
}