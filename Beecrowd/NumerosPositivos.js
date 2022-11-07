var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(i = 0, S = 0; i < 6; i++){

let A = Number(lines.shift());

	if(A > 0){

		S++;

	}

}

console.log(`${S} valores positivos`);