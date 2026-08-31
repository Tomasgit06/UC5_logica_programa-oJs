const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite sua nota: "))

if (nota >= 7 ) {
   console.log ("Voce esta aprovado!")
} else {
  console.log ("Voce esta reprovado")
}