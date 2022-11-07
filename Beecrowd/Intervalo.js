var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift("Insira o número"));

if(A < 0  || A > 100){

    console.log("Fora de intervalo");

}

else if(A >= 0 && A <= 25){

    console.log("Intervalo [0,25]");

}

else if(A > 25 && A <= 50){

    console.log("Intervalo (25,50]");

}

else if(A > 50 && A <= 75){

    console.log("Intervalo (50,75]");

}

else console.log("Intervalo (75,100]")