const prompt = require('prompt-sync')();
console.clear();
/*
Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias 
e informe-a em anos, meses e dias. 
Também considere todo ano com 365 dias e todo mês com 30 dias.
*/


console.log("Exercício da quantidade de dias mas ao contrário!");

let qtdDias = +prompt("Digite a quantidade de dias: ");

let anos = Math.floor(qtdDias / 365);
qtdDias = qtdDias - (anos * 365);

let meses = Math.floor(qtdDias/30);
qtdDias = qtdDias - (meses * 30);

console.log(`A idade digitada em dias corresponde exatamente à: ${anos} anos, ${meses} meses e ${qtdDias} dias`);