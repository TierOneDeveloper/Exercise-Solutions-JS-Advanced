function printAnArrayWithAGivenDelimiter(arr, delimiter) {
  let result = arr.join(delimiter);
  console.log(result);
}

printAnArrayWithAGivenDelimiter(['One',
  'Two',
  'Three',
  'Four',
  'Five'], '-')

printAnArrayWithAGivenDelimiter(['How about no?',
  'I',
  'will',
  'not',
  'do',
  'it!'], '_')