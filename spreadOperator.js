// The spread operator works together with rest parameters in the sense that it takes and array to convert it into a list of parameters. You could rewrite the code as “…[5, 4]” or “…nums”, both equivalent.

function add(a, b) {
  return a + b;
}

let nums = [5, 4];

console.log(add(...nums));
