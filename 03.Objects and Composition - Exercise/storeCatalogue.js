function storeCatalogue(list) {

  let info = {};

  for (let line of list) {
    let [product, price] = line.split(" : ");
    let productFirstChar = product.slice(0, 1);


    if (!info.hasOwnProperty(productFirstChar)) {
      info[productFirstChar] = [{ product, price }];
    } else {
      info[productFirstChar].push({ product, price });
    }
  }

  let sortedInfo = {};

  let keys = Object.keys(info).sort((a, b) => a.localeCompare(b));

  keys.forEach(key => { sortedInfo[key] = info[key] });

  for (let key in sortedInfo) {
    sortedInfo[key].sort((a, b) => (a.product).localeCompare(b.product));
    console.log(key);
    sortedInfo[key].forEach(el => console.log(`${el.product}: ${el.price}`));
  }
}

// storeCatalogue(['Appricot : 20.4',
//   'Fridge : 1500',
//   'TV : 1499',
//   'Deodorant : 10',
//   'Boiler : 300',
//   'Apple : 1.25',
//   'Anti-Bug Spray : 15',
//   'T-Shirt : 10'])

storeCatalogue(['Banana : 2',
  'Rubic\'s Cube : 5',
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10'])

