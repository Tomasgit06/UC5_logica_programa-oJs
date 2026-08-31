const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero: "))

if (numero > 0) {
   console.log ("Ele é numero positivo")
} else { 
  console.log ("Ele é um numero negativo")
}