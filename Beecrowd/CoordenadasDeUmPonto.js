var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [X, Y] = lines.shift("insira o valor de A e B").split(" ").map(Number);

if(X > 0 && Y > 0){

    console.log("Q1");

}

else if(X > 0 && Y < 0){

    console.log("Q4");

}

else if(X < 0 && Y > 0){

    console.log("Q2");

}

else if(X < 0 && Y < 0){

    console.log("Q3");

}

else if(X === 0 && Y > 0 || Y < 0){

    console.log("Eixo Y");

}

else if(Y === 0 && X > 0 || X < 0){

    console.log("Eixo X");

}

else console.log("Origem");