// Maps substitute objects to store key/value pairs. Pairs are stored as 2-element arrays [key, value].
// Maps can use any value as key besides strings but objects can’t.
// Some common methods:
// map.size       returns its size
// map.entries()  returns entries in insertion order [k,v]
// map.keys()     returns just values in insertion order [k]
// map.values()   returns just values in insertion order [v]
// In order to manipulate its content
// map.has(key)  // boolean
// map.set(key, value)
// map.get(key) // value
// map.delete(key)
// Map implements the in-built iterable so it can be used with for..of.

let x = new Map([[1, 'is a number key']]);
let today = new Date()

//anything can be a key
x.set(today.toString(), 111)
x.set(today, 222);
x.delete(today.toString());

console.log('The map contains', x.size, 'elements.');
console.log('The map has a today Date key:', x.has(today));
console.log('The map has a today string key:', x.has(today.toString()));

//values and keys
x.forEach((value, key, map) => console.log(value, key, map));

//iterable
for (let value of x) {
  console.log(value);
}

//iterable values
for (let value of x.values()) {
  console.log(value);
}

//iterable keys
for (let value of x.keys()) {
  console.log(value);
}

//iterable entries (key, value)
for (let value of x.entries()) {
  console.log(value);
}
