// You can use for..of with built-in iterables: String, Array, TypedArray, Map and Set.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let v of arr) {
  sum += v;
}

console.log('1 + 2 + 3 + 4 + 5 =', sum);