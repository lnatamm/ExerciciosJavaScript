var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().split(" ");
let lista = [];

for(i = 0; i < x; i++){
    let nome = lines.shift();
    lista[i] = nome;
}

for(j = 0; j < lista.length - 1; j++){

    for(k = 0; k < (lista.length - j - 1); k++){

        if(lista[k] > lista[k + 1]){

            aux = lista[k];
            lista[k] = lista[k + 1];
            lista[k + 1] = aux;

        }

    }
    
}

console.log(lista[y - 1]);