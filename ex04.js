const prompt = require('prompt-sync')();
console.clear();

console.log("Exercício da quantidade de dias mas ao contrário!");

let qtdDias = +prompt("Digite a quantidade de dias: ");

let anos = Math.floor(qtdDias / 365);
qtdDias = qtdDias - (anos * 365);

let meses = Math.floor(qtdDias/30);
qtdDias = qtdDias - (meses * 30);

console.log(`A idade digitada em dias corresponde exatamente à: ${anos} anos, ${meses} meses e ${qtdDias} dias`);