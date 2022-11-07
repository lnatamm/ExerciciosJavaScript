var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let Y = Number(lines.shift("Insira a distância percorrida"));

console.log(Y * 2 + " minutos");