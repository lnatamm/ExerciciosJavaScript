var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines.shift());

if(N >= 0 && N <= 2000) console.log(`Isento`);

else if(N > 2000){

    if(N <= 3000) console.log(`R$ ${Number(((N - 2000) * (8 / 100))).toFixed(2)}`);
       
    else{
       
        if(N <= 4500) console.log(`R$ ${Number((((N -3000) * (18 / 100)) + (1000 * (8 / 100)))).toFixed(2)}`);
            
        else console.log(`R$ ${Number((((N - 4500) * (28 / 100)) + (1500 * (18 / 100)) + (1000 * (8/ 100)))).toFixed(2)}`);
    }
    
}