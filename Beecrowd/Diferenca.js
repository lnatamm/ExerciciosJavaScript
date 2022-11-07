var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, C, D, dif;

A = Number(lines.shift("Insira o valor de A")).toFixed(1);
B = Number(lines.shift("Insira o valor de B")).toFixed(1);
C = Number(lines.shift("Insira o valor de C")).toFixed(1);
D = Number(lines.shift("Insira o valor de C")).toFixed(1);
dif = (A * B - C * D);


console.log("DIFERENCA = " + dif);