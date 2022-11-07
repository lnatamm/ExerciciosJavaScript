var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T, V 

T = Number(lines.shift("Insira o tempo da viagem"));
V = Number(lines.shift("Insira a velocidade média"));

console.log(((T * V) / 12).toFixed(3));