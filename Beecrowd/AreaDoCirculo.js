var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, n, r;

n = Number(3.14159);
r = Number(lines.shift("Insira o valor do Raio"));
A = n * r * r;

console.log("A=" + A.toFixed(4));