var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [ladoA, ladoB, ladoC] = lines.shift("Insira os lados").split(" ").map(Number);
let maior, meio, menor;

if(ladoA >= ladoB && ladoA >= ladoC){

	maior = ladoA;
	
	if(ladoB > ladoC){

		menor = ladoC;
		meio = ladoB;

	}
		else {

			meio = ladoC;
			menor = ladoB;
	}


}

else if(ladoB >= ladoA && ladoB >= ladoC){
	
	maior = ladoB;

	if(ladoA > ladoC){

	menor = ladoC;
	meio = ladoA;

	}
		else {

			meio = ladoC;
			menor = ladoA;
	}

}

else if(ladoC >= ladoA && ladoC >= ladoB){

maior = ladoC;

	if(ladoA > ladoB){

		menor = ladoB;
		meio = ladoA;

}
		else {

			meio = ladoB;
			menor = ladoA;
}
}


 

if(maior >= (meio + menor)){

	console.log("NAO FORMA TRIANGULO");


} else {

	if((maior * maior) == (meio * meio) + (menor * menor)){

		console.log("TRIANGULO RETANGULO");


	}

	else if((maior * maior) > (meio * meio) + (menor * menor)){

		console.log("TRIANGULO OBTUSANGULO");

	}

	else if((maior * maior) < (meio * meio) + (menor * menor)){

		console.log("TRIANGULO ACUTANGULO");

	}

	if(maior == meio && meio == menor){

		console.log("TRIANGULO EQUILATERO");
    } else if(maior == meio && meio != menor || maior == menor && menor != meio || menor == meio && meio != maior){

		console.log("TRIANGULO ISOSCELES");

	}
}