function wordsUppercase(text) {
  
  let reggex = /[^A-Za-z0-9]+/
  let result = text.split(reggex).join(" ").trim().split(" ").map(x => x.toUpperCase()).join(", ");
  console.log(result);

}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')