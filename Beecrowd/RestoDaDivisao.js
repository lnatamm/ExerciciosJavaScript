var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let AUX;
let A = Number(lines.shift());
let B = Number(lines.shift());

if(A > B){

    AUX = A;
    A = B;
    B = AUX;

}

B--;

while(A < B){

    A++;
    if(A % 5 == 2 || A % 5 == 3){

        console.log(A);
        
    }

}