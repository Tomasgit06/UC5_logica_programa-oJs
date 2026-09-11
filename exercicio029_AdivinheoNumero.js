const prompt = require("prompt-sync")();
 
function adivinheONumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  const maxTentativas = 5;
  let tentativas = 0;
  let acertou = false;
 
 
  while (tentativas < maxTentativas && !acertou) {
    const palpite = Number(prompt(`Tentativa ${tentativas + 1}/${maxTentativas} - Digite seu palpite: `));
    tentativas++;
 
    if (palpite === numeroSecreto) {
      acertou = true;
      console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s).`);
    } else if (palpite > numeroSecreto) {
      console.log("O número secreto é menor que isso.");
    } else {
      console.log("O número secreto é maior que isso.");
    }
  }
 
  if (!acertou) {
    console.log(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`);
  }
}
 
adivinheONumero();
