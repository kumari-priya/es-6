// Using Key
let [one, two] = [1, 2];
let {three, four} = {three: 3, four:  4};

console.log(one, two, three, four); // 1 2 3 4

// Using Value
// =============Same As==========================
//let [one, two] = [1, 2];
let {a:three, b:four} = {a: 3, b:  4};

console.log(one, two, three, four); // 1 2 3 4
