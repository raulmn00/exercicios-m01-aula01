const prompt = require("prompt-sync")();
console.clear();
console.log("Média ponderada!");

let notaA = prompt("Digite a primeira nota: ");
let notaB = prompt("Digite a segunda nota: ");

let mediaPonderada = (notaA * 0.4) + (notaB * 0.6); 

console.log(`A média ponderada do aluno foi de: ${mediaPonderada}`);