const prompt = require('prompt-sync')();
console.clear();

console.log("Exercício da quantidade de dias!");

let qtdAnos = +prompt("Digite quantos anos a sua pessoa tem: ");
let qtdMeses = +prompt("Digite quantos meses a sua pessoa tem: ");
let qtdDias = +prompt("Digite quantos dias a sua pessoa tem: ");

let totalDias = (qtdAnos * 365) + (qtdMeses * 30) + qtdDias;

console.log(`A sua pessoa tem exatamente ${totalDias} dias vividos!`);