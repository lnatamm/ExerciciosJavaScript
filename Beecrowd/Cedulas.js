var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = Number(lines.shift());

let valores = [100, 50, 20, 10, 5, 2, 1].map(Number);

function resto(v, n){
   
    let toReturn = v;
    
    for(i = 0; i < n;){
        
        if(i != n - 1){
            toReturn = toReturn % valores[i];
        }
        
        else {
            toReturn = toReturn / valores[i];
        }
       
        i++;
    }
    
    return toReturn;
    
}

console.log(valor);
console.log(`${Math.trunc(resto(valor, 1))} nota(s) de R$ 100,00`);
console.log(`${Math.trunc(resto(valor, 2))} nota(s) de R$ 50,00`);
console.log(`${Math.trunc(resto(valor, 3))} nota(s) de R$ 20,00`);
console.log(`${Math.trunc(resto(valor, 4))} nota(s) de R$ 10,00`);
console.log(`${Math.trunc(resto(valor, 5))} nota(s) de R$ 5,00`);
console.log(`${Math.trunc(resto(valor, 6))} nota(s) de R$ 2,00`);
console.log(`${Math.trunc(resto(valor, 7))} nota(s) de R$ 1,00`);