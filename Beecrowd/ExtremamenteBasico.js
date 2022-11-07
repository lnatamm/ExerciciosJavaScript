var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
   
let a = parseInt(lines.shift("Valor de A"));
let b = parseInt(lines.shift("Valor de B"));

let x = a + b;

console.log("X = " + x);