const prompt = require ('prompt-sync')()


total = 0
let numero = Number(prompt("digite um numero: "))

for (let i = 1; i <= 10; i++) {
    if (numero * i  % 2 === 0 ) 
     console.log(numero * i)
}
