var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, SOMA;

A = Number(lines.shift("Insira o valor de A"));
B = Number(lines.shift("Insira o valor de B"));
SOMA = A + B;

console.log("SOMA = " + SOMA);