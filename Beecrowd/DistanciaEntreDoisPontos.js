var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [X1, Y1] = lines.shift().split(" ").map(Number);
let [X2, Y2] = lines.shift().split(" ").map(Number);

console.log((Math.sqrt(((X2 - X1) * (X2 - X1)) + ((Y2 - Y1) * (Y2 - Y1)))).toFixed(4));