function fruit(product, weightInGrams, pricePerKilo) {

  let weightInKilo = weightInGrams / 1000;
  let money = weightInKilo * pricePerKilo;
  console.log(`I need $${money.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${product}.`);
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)