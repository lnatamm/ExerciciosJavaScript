var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C, D] = lines.shift("Insira a nota 1, 2, 3 e 4").split(" ").map(Number);

let M = ((2 * A) + (3 * B) + (4 * C) + D) / 10;    

console.log("Media: " + M.toFixed(1));

if(M >= 7){

    console.log("Aluno aprovado.");

}

else if(M < 5){

    console.log("Aluno reprovado.");

}

else{

    let E = Number(prompt("Insira o valor do exame"));
    let M2 = (E + M) / 2 ;
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + E.toFixed(1));
        if(M2 > 5 ){

            console.log("Aluno aprovado.");

        }
        else console.log("Aluno reprovado.");
    console.log("Media final: " + M2.toFixed(1));

} 