function calorieObject(arr) {

  let object = {};

  for (let i = 0; i < arr.length; i += 2) {
    let key = arr[i];
    let value = Number(arr[i + 1]);
    object[key] = value;
  }
  console.log(object);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])