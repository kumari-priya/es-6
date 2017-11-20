// This feature almost removes the need for a complex template system. It uses the special character `template literal` to delimit a template literal string. We can then inject values into it by using ${value} syntax.

let person = {name: 'John Smith'};
let tpl = `My name is ${person.name}.`;

console.log(tpl);
