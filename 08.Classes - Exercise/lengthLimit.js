// class Stringer {

//   constructor(string, length) {
//     this.innerString = string;
//     this.innerLength = Number(length);
//     this.initialString = string;
//   }

//   toString() {
//     return this.innerString;
//   }

//   increase(length) {
//     length = Number(length);
//     let newLength = this.innerLength + length;
//     let initialLength = this.initialString.length;

//     if (newLength >= initialLength) {
//       this.innerString = this.initialString;
//       this.innerLength = initialLength;
//       return this.innerString;
//     } else {
//       this.innerString = this.initialString.slice(0, -(initialLength - newLength)) + "...";
//       if (length === 0) {
//         this.innerLength = 0;
//       } else {
//         this.innerLength = initialLength - newLength;
//       }
//     }
//   }

//   decrease(length) {
//     length = Number(length);
//     let newLength = this.innerLength - length;
//     if (newLength <= 0) {
//       this.innerLength = 0;
//       this.innerString = "...";
//     } else {
//       let slicedPart = this.initialString.slice(0, -newLength)
//       this.innerString = slicedPart + "...";
//       this.innerLength = newLength;
//     }
//   }
// }

class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }

  increase(num) {
    this.innerLength += num;
  }

  decrease(num) {
    if (this.innerLength - num < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= num;
    }
  }

  toString() {
    if (this.innerLength < this.innerString.length) {
      return this.innerString.substring(0, this.innerLength) + '...';
    } else {
      return this.innerString;
    }
  }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(6);
console.log(test.toString()); // Test
