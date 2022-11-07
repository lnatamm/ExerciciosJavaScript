var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(A = parseInt(lines.shift()), B = A + 12; A < B ; A++){
    
    if(A % 2 > 0 && A >= 0){

        console.log(A);

    }

}