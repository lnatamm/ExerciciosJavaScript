var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n, h, v, s;

n = Number(lines.shift("Insira o Número"));
h = Number(lines.shift("Insira a quantidade de horas"));
v = Number(lines.shift("Insira o valor por hora")).toFixed(2);
s = v * h;


console.log("NUMBER = " + n);
console.log("SALARY = U$ " + s.toFixed(2));