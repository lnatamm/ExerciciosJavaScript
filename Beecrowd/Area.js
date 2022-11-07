var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map(Number);

let pi = 3.14159;

console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(C * C * pi).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A + B) * C) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);