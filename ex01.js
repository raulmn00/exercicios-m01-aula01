const prompt = require("prompt-sync")();
console.clear();

/*
Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média ponderada do aluno, 
sabendo que a nota A tem peso 4 e a nota B tem peso 6. 
Ex: nota a * 4 e nota b * 6.

*/

console.log("Média ponderada!");

let notaA = prompt("Digite a primeira nota: ");
let notaB = prompt("Digite a segunda nota: ");

let mediaPonderada = notaA * 0.4 + notaB * 0.6;

console.log(`A média ponderada do aluno foi de: ${mediaPonderada}`);
