const prompt = require('prompt-sync')();
console.clear();
/*
Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. 
Calcule e exiba o total de dias que essa pessoa já viveu. 
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

*/ 

console.log("Exercício da quantidade de dias!");

let qtdAnos = +prompt("Digite quantos anos a sua pessoa tem: ");
let qtdMeses = +prompt("Digite quantos meses a sua pessoa tem: ");
let qtdDias = +prompt("Digite quantos dias a sua pessoa tem: ");

let totalDias = (qtdAnos * 365) + (qtdMeses * 30) + qtdDias;

console.log(`A sua pessoa tem exatamente ${totalDias} dias vividos!`);