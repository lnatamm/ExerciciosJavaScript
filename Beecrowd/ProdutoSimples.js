var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, PROD;

A = Number(lines.shift("Insira o valor de A"));
B = Number(lines.shift("Insira o valor de B"));

PROD = A * B;

console.log("PROD = " + PROD);