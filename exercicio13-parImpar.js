const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero: "))

if (numero % 2 === 0) {
   console.log ("Ele é numero par")
} else { 
  console.log ("Ele é um impar")}