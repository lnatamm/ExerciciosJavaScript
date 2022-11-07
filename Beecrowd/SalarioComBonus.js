var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome, salario, vendas, bonus;

nome = lines.shift("Insira seu nome");
salario = Number(Number(lines.shift("Insira o salário fixo")).toFixed(2));
vendas = Number(Number(lines.shift("Insira o número de vendas")).toFixed(2));
bonus = Number(salario + vendas * 0.15);


console.log("TOTAL = R$ " + bonus.toFixed(2));