var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let S, S1, A, B;

A = Number(lines.shift());

if(A < 0 || A > 10){

    for(i = 0; A < 0 || A > 10 && i == i; i++){


        console.log("nota invalida");

     A = Number(lines.shift());

        if(A > 0 && A <= 10){

         S = A;
            
         break;
                 
        }


    
    }


}

else S = A;

B = Number(lines.shift());

if(B < 0 || B > 10){

     for(i = 0; B < 0 || B > 10 && i == i; i++){


        console.log("nota invalida");

      B = Number(lines.shift());

        if(B > 0 && B <=10){
         
            S1 = B;
          
            break;
        }


    }
        
}

else S1 = B;

console.log(`media = ${(S + S1) / 2}`);