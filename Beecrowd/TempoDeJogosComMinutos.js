var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [hi, mi, hf , mf] = lines.shift().split(" ").map(Number);

let h = hf - hi, m = mf - mi;

if(m < 0){

    m += 60;
    h--;

}

if(h < 0){

    h += 24;

}

if(h === 0 && m === 0){

    h = 24;

}

console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`);