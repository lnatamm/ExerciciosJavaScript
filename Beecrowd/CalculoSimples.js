var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [Cod, Nmr, Valor] = lines.shift().split(" ").map(Number);

let [Cod2, Nmr2, Valor2] = lines.shift().split(" ").map(Number);

let resultado = (Nmr * Valor) + (Nmr2 * Valor2);


console.log(`VALOR A PAGAR: R$ ${resultado.toFixed(2)}`);