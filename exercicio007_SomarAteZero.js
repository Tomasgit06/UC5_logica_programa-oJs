const prompt = require('prompt-sync')()


let total = 0 
let numero = Number(prompt("digite os numeros: "))


while (numero !== 0  ) {
    total = total + numero
   numero = Number(prompt("digite os numeros: "))
}

console.log(total)
