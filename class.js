class Polygon {
  constructor(height, width) { //class constructor
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() { //class method
    console.log('Hi, I am a', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length); //call the parent method with super
    this.name = 'Square';
  }

  get area() { //calculated attribute getter
    return this.height * this.width;
  }
}

let s = new Square(5);

s.sayName(); // Hi, I am a Square.
console.log(s.area); // 25


// function Polygon(height, width) { //class constructor
//   this.name = 'Polygon';
//   this.height = height;
//   this.width = width;
// }
//
// Polygon.prototype = {
//   sayName: function () { //class method
//     console.log('Hi, I am a ' + this.name + '.');
//   }
// };
//
// function Square(length) { //class constructor
//   Polygon.call(this, length, length);
//   this.name = 'Square';
// }
// // Square inherits from Polygon
// Square.prototype = Object.create(Polygon.prototype);
// // Set the "constructor" property to refer to Square
// Square.prototype.constructor = Square;
// // Add getter
// Square.prototype.getArea = function() { //class method
//   return this.height * this.width;
// };
//
// var p = new Polygon(5,5);
// p.sayName(); // Hi, I am a Polygon.
//
// var s = new Square(5);
// s.sayName(); // Hi, I am a Square.
// console.log(s.getArea()); // 25
