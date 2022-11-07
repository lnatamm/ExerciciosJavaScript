var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());

if(A <= 12 && A > 0){

    if(A == 1){
        
        console.log(`January`);

    }
    
    else if(A == 2){
        
        console.log(`February`);

    }
    
    else if(A == 3){
        
        console.log(`March`);

    }
    
    else if(A == 4){
        
        console.log(`April`);

    }
    
    else if(A == 5){
        
        console.log(`May`);

    }
    
    else if(A == 6){
        
        console.log(`June`);


    }
    
    else if(A == 7){
        
        console.log(`July`);

    }
    
    else if(A == 8){
        
        console.log(`August`);

    }
    
    else if(A == 9){
        
        console.log(`September`);

    }
    
    else if(A == 10){
        
        console.log(`October`);

    }
    
    else if(A == 11){
        
        console.log(`November`);

    }
    
    else  console.log(`December`);

}