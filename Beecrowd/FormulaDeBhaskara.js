var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift("Insira os valores de A, B e C").split(" ").map(Number);

if((B * B) - 4 * A * C < 0){

    console.log("Impossivel calcular");

}

else if(A === 0){

    console.log("Impossivel calcular");

}

else {

    console.log("R1 = " + ((-B + Math.sqrt((B * B) - 4 * A * C)) / (2 * A)).toFixed(5));
    console.log("R2 = " + ((-B - Math.sqrt((B * B) - 4 * A * C)) / (2 * A)).toFixed(5));
}
