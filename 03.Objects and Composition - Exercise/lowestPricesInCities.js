function lowestPricesInCities(input) {

  let result = {};

  for (let each of input) {
    let [town, product, price] = each.split(" | ");
    price = Number(price);

    if (!result.hasOwnProperty(product)) {
      result[product] = {
        town,
        price
      };
    } else if (result[product].price > price) {
      result[product].price = price;
      result[product].town = town;
    }
  }

  let entries = Object.entries(result);

  for (let [productName, productInfo] of entries) {
    console.log(`${productName} -> ${productInfo.price} (${productInfo.town})`);
  }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 0.5',
  'New York | Sample Product | 999',
  'New York | Burger | 10'])
