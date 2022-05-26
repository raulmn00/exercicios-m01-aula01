const prompt = require('prompt-sync')();
console.clear();

console.log("Exercícios das peças!");

let nomePeca1 = prompt("Digite o nome da primeira peça: ");
let valorPeca1 = +prompt("Quanto custa a primeira peça: ");
let qtdPeca1 = +prompt("Quantas unidades dessa peça você deseja? ");

console.log(nomePeca1);
console.log(valorPeca1);
console.log(qtdPeca1);