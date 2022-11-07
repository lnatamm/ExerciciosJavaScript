var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B;

for(i = 0; i < A; i++){
    
    B = parseInt(lines.shift());
    
    if(B > 0){
    
        if(B % 2 === 0){
    
            console.log("EVEN POSITIVE");
    
        }
    
        else console.log("ODD POSITIVE");
    
    }
    
    else if(B < 0){
    
        if(B % 2 === 0){
    
            console.log("EVEN NEGATIVE");
    
        }
    
        else console.log("ODD NEGATIVE");
    
    }
    
    if(B == 0) {
        console.log("NULL");
    }

}