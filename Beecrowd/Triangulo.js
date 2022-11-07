var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B , C] = lines.shift("Insira os valores dos lados").split(" ").map(Number);

if(A + B > C && A + C > B && B + C > A){

    console.log("Perimetro = " + (A + B + C).toFixed(1));

}

else console.log("Area = " + ((((A + B) * C) / 2)).toFixed(1));