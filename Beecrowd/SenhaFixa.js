var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let S = Number(lines.shift());

while(S != 2002){
        
    console.log("Senha Invalida");
    let S = Number(lines.shift());
    
    if(S == 2002){

        console.log("Acesso Permitido");
        break;
    }

}