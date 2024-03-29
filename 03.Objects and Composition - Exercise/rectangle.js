function rectangle(width, height, color) {

  let capitalColor = [...color][0].toUpperCase() + [...color].slice(1).join('');

  let rectangle = {
    width: width,
    height: height,
    color: capitalColor,
    calcArea() {
      return width * height;
    }
  }
  return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
