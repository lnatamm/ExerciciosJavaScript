var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for(A = 10, i = 1; i <= A; i++){

    console.log(`${i} x ${N} = ${i * N}`);

}