const prompt = require('prompt-sync')()

let compra = Number(prompt("Digite o valor da compra: "))

let cupom = prompt("Voce tem cupom?: ")

let total
if (compra >= 150 && cupom == "sim") {
    total = (compra * 0.15)
console.log ("valor com desconto: " + total)
} else {
  console.log ("Voce nao tem cupom")}


