const prompt = require('prompt-sync')()

console.log ("Festa")


let idade = Number(prompt("Qual sua idade?:"))

let convite = prompt("Voce tem convite?:").trim()


if (idade >= 18 && convite=== "sim") {
    console.log ("Bem vindo a festa")
  } else {
    console.log ("entrada nao autorizada")
   }