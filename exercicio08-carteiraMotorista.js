const prompt = require('prompt-sync')()

let carteira = prompt ("Voce quer tirar sua carteira?: ")

if (carteira == "sim") {
    console.log ("Que bom! Vamos pegar seus dados")
} else {
  console.log ("ok entao")
  process.exit(0)
} 

let idade = Number(prompt("Digite sua idade:" ))

if (idade >= 18) {
   console.log ("Voce pode tirar sua CNH!")
} else {
  console.log ("Voce é muito novo")
}