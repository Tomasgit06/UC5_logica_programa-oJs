const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: ")) 

if (idade <= 12) {
   console.log ("Voce paga meia entrada")
} else if (idade >= 60) {
   console.log ("Voce paga meia entrada")
} else {
  console.log ("Voce paga o valor cheio")
}