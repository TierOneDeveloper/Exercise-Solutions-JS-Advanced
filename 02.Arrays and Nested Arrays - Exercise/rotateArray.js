function rotateArray(arr, steps) {

  for (let i = 0; i < steps; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2)

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)