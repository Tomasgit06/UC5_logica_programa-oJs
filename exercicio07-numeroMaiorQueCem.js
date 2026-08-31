const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero:" ))

if (numero > 100) {
   console.log ("Este numero é maior que 100!")
} if (numero < 100) {
   console.log ("Este numero é menor que 100!")
} 