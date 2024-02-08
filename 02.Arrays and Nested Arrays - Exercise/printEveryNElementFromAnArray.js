function printEveryNElementFromAnArray(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result;
}

printEveryNElementFromAnArray(['5',
  '20',
  '31',
  '4',
  '20'], 2)

printEveryNElementFromAnArray(['dsa',
  'asd',
  'test',
  'tset'], 2)

printEveryNElementFromAnArray(['1',
  '2',
  '3',
  '4',
  '5'], 6)

