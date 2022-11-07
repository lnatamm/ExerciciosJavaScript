var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());

function reajuste(salario, porcentagem){

    let r = (salario * (porcentagem / 100));
    return r;

}

if(A >= 0){

    if(A <= 400){

        let r1 = reajuste(A, 15);
        console.log(`Novo salario: ${(A + r1).toFixed(2)}`);
        console.log(`Reajuste ganho: ${r1.toFixed(2)}`);
        console.log(`Em percentual: 15 %`);
    }

    else if(A <= 800){

        let r2 = reajuste(A, 12);
        console.log(`Novo salario: ${(A + r2).toFixed(2)}`);
        console.log(`Reajuste ganho: ${r2.toFixed(2)}`);
        console.log(`Em percentual: 12 %`);
    }

    else if(A <= 1200){

        let r3 = reajuste(A, 10);
        console.log(`Novo salario: ${(A + r3).toFixed(2)}`);
        console.log(`Reajuste ganho: ${r3.toFixed(2)}`);
        console.log(`Em percentual: 10 %`);
    }

    else if(A <= 2000){
        
        let r4 = reajuste(A, 7);
        console.log(`Novo salario: ${(A + r4).toFixed(2)}`);
        console.log(`Reajuste ganho: ${r4.toFixed(2)}`);
        console.log(`Em percentual: 7 %`);
    }

    else{ 
        
        let r5 = reajuste(A, 4);
        console.log(`Novo salario: ${(A + r5).toFixed(2)}`);
        console.log(`Reajuste ganho: ${r5.toFixed(2)}`);
        console.log(`Em percentual: 4 %`);
    }

}