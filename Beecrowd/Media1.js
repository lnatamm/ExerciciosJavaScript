var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
let A, B, M;

A = Number(lines.shift("Insira o valor de A")).toFixed(1);
B = Number(lines.shift("Insira o valor de B")).toFixed(1);
M = ((A * 3.5) + (B * 7.5)) / 11;

console.log("MEDIA = " + M.toFixed(5));