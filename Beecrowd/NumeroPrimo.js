var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N  = Number(lines.shift()), i = 0, AUX;

for(i; i < N; i++){

let X = Number(lines.shift());

AUX = X - 1;

    while(AUX > 1){
        
        if(X % AUX === 0){ 
        console.log(`${X} nao eh primo`);
        AUX = 0;
        break;
        }
        
        AUX--;
       
    }

    if(AUX == 1) console.log(`${X} eh primo`);

}