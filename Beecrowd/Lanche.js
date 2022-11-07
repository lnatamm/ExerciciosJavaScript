var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B] = lines.shift("Indique o código e a quantidade").split(" ").map(Number);

if(A < 1 && A > 5){

    console.log("Insira valor entre 1 e 5");

}

else if(A == 1){

    console.log("Total: R$ " + (B * 4).toFixed(2));

}

else if(A == 2){

    console.log("Total: R$ " + (B * 4.5).toFixed(2));

}

else if(A == 3){

console.log("Total: R$ " + (B * 5).toFixed(2));

}

else if(A == 4){

console.log("Total: R$ " + (B * 2).toFixed(2));

}

else if(A == 5){

console.log("Total: R$ " + (B * 1.5).toFixed(2));

}

else console.log("Insira valores entre 1 a 5");