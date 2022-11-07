var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [T, D] = lines.shift().split(" ").map(Number);

let [hora, minuto, segundo] = lines.shift().split(":").map(Number);

let [T1, D2] = lines.shift().split(" ").map(Number);

let [hora2, minuto2, segundo2] = lines.shift().split(":").map(Number);

let DV, HV, MV;

DV = D2 - D;
HV = hora2 - hora;
MV = minuto2 - minuto;
SV = segundo2 - segundo;

if(SV < 0){

	SV += 60;
	MV--;

}

if(MV < 0){

	MV += 60;
	HV--;

}

if(HV < 0){

	HV += 24;
	DV--;
}

if(HV == 0 && MV == 0 && SV == 0){

	HV = 24;

}

console.log(`${DV} dia(s)`);
console.log(`${HV} hora(s)`);
console.log(`${MV} minuto(s)`);
console.log(`${SV} segundo(s)`);