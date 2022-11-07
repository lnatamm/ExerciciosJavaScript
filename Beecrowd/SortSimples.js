var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map(Number);

function frase(){

    console.log("");
    console.log(A);
    console.log(B);
    console.log(C);

}

if(A < B && A < C){

    console.log(A);

    if(B < C){
        console.log(B);
        console.log(C);

    }
    else{
        console.log(C);
        console.log(B);

    }

    frase();


}

else if(B < A && B < C){

    console.log(B);

    if(A < C){

        console.log(A);
        console.log(C);
    
    }
    else{
        console.log(C);
        console.log(A);

    }

    frase();


}

else{

    console.log(C);

    if(B < A){

        console.log(B);
        console.log(A);

    }
    else{

        console.log(A);
        console.log(B);

    }

    frase();

}