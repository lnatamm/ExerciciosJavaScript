var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, X;

X = 1;

while(X == 1){
    
    A = Number(lines.shift());

    if(A < 0 || A > 10){

        for(i = 0; A < 0 || A > 10 && i == i; i++){


            console.log("nota invalida");

        A = Number(lines.shift());

            if(A > 0 && A <= 10){

                break;
            
                
                    
            }


        
        }


    }

    B = Number(lines.shift());

    if(B < 0 || B > 10){

        for(i = 0; B < 0 || B > 10 && i == i; i++){


            console.log("nota invalida");

        B = Number(lines.shift());

            if(B > 0 && B <=10){
            
                break;
                
            
            }


        }
            
    }

    console.log(`media = ${((A + B) / 2).toFixed(2)}`);

    console.log(`novo calculo (1-sim 2-nao)`);

    X = Number(lines.shift());


    while(X != 1 && X != 2){
        
        console.log(`novo calculo (1-sim 2-nao)`);

        X = Number(lines.shift());


    }

}