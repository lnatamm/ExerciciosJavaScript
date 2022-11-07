var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = Number(lines.shift("Insira o valor do Raio"));

console.log("VOLUME = " + ((4 / 3) *  3.14159 * R * R * R).toFixed(3));