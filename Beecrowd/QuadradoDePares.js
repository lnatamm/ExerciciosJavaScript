var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(A = parseInt(lines.shift()), B = 2; B <= A ; B = B + 2){
    
    if(B % 2 === 0){
    console.log(`${B}^2 = ${B * B}`);
    }
    
}