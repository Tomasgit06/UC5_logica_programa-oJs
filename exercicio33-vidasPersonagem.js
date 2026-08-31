const prompt = require('prompt-sync')()

let vidas = Number(prompt("Digite a quantidade de vidas: "))

if (vidas == 0){
   console.log ("Game over")
} else if (vidas <= 2){
  console.log ("cuidado")
} else {
 console.log ("tudo certo")
} 