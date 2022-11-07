var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, C, M;

A = Number(lines.shift("Insira o valor de A")).toFixed(1);
B = Number(lines.shift("Insira o valor de B")).toFixed(1);
C = Number(lines.shift("Insira o valor de C")).toFixed(1);
M = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log("MEDIA = " + M.toFixed(1));