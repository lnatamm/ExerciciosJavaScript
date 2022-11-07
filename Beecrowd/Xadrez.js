var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let L, C;

L = Number(lines.shift());
C = Number(lines.shift());

if(C % 2 == 0){

    if(L % 2 == 0) console.log(1);

    else console.log(0);
}

else if(C % 2 > 0){

    if(L % 2 == 0) console.log(0);

    else console.log(1);

}