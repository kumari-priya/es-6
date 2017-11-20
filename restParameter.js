// Rest parameters remove the need of dealing with the arguments object. The syntax is pretty sleek. It takes a list of parameters converting them to an array. This will be dynamically handled matching the function signature definition. In the example, as format takes two parameters, the first one is taken by str and the rest are put together into args as an array. Very handy!

function format(str, ...args) {
  return str.replace(/\{\s*(\d+)\s*\}/g, function(m, n) {
    return args[n];
  });
}

let msg = format(
  'The {0}st arg is a string, the {1} are {2}.',
  1,
  'rest',
  'unknown'
);

console.log(msg);
