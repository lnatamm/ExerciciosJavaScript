var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B] = lines.shift("Insira os 2 horários").split(" ").map(Number);

if(A < B && A >= 0 && B >= 0){

    console.log("O JOGO DUROU " + (B - A) + " HORA(S)");

}

else if(A > B && A >= 0 && B >= 0){

    console.log("O JOGO DUROU " + (B + 24 - A) + " HORA(S)");

}

else if(A == B){

    console.log("O JOGO DUROU " + 24 + " HORA(S)");

}