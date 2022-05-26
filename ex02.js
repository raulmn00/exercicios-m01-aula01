const prompt = require('prompt-sync')();
console.clear();

console.log("Exercícios das peças!");

let nomePeca1 = prompt("Digite o nome da primeira peça: ");
let valorPeca1 = +prompt("Quanto custa a primeira peça: ");
let qtdPeca1 = +prompt("Quantas unidades dessa peça você deseja? ");

let nomePeca2 = prompt("Digite o nome da segunda peça: ");
let valorPeca2 = +prompt("Quanto custa a segunda peça: ");
let qtdPeca2 = +prompt("Quantas unidades dessa peça você deseja? ");

let valorTotal1= valorPeca1 * qtdPeca1;
let valorTotal2 = valorPeca2 * qtdPeca2;

console.log(`Para a primeira peça ${nomePeca1}, você desejou comprar ${qtdPeca1} unidades e pagará a quantia de ${valorTotal1}`);
console.log();
console.log(`Para a primeira peça ${nomePeca2}, você desejou comprar ${qtdPeca2} unidades e pagará a quantia de ${valorTotal2}`);