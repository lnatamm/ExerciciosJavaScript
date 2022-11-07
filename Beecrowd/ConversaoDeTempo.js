var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X, horas, minutos, segundos;

X = lines.shift("Insira o valor de x");
horas = X / 3600;
minutos = (X % 3600) / 60;
segundos = (X % 3600) % 60;

console.log(Math.trunc(horas) + ":" + Math.trunc(minutos) + ":" + Math.trunc(segundos));