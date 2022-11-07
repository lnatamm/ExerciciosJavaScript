var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X, Y

X = Number(lines.shift("Insira a distância percorrida"));
Y = Number(lines.shift("Insira o consumo de Gasolina")).toFixed(1);

console.log((X / Y).toFixed(3) + " km/l");