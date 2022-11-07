var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pos = 0, neg = 0, imp = 0, p = 0, i = 0;

for(i; i < 5; i++){

    let numero = Number(lines.shift());

    if(numero % 2 === 0) p++;

    else imp++;

    if(numero > 0) pos++;

    else if(numero < 0) neg++;


}

console.log(`${p} valor(es) par(es)`);
console.log(`${imp} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);