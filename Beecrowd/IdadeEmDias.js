var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X, anos, meses, dias;

X = lines.shift("Insira o valor de x");
anos = X / 365;
meses = (X % 365) / 30;
dias = (X % 365) % 30;

console.log(Math.trunc(anos) + " ano(s)");
console.log(Math.trunc(meses) + " mes(es)");
console.log(Math.trunc(dias) + " dia(s)");