const prompt = require('prompt-sync')()

console.log ("Calculadora")

let numero1 = Number(prompt(" digite um numero"))

let numero2 = Number(prompt(" digite outro"))

let operacao = prompt(" digite uma operacao:").trim()


 if (operacao == "+") {
    console.log (numero1 + numero2)}

  if (operacao == "-") {
    console.log (numero1 - numero2)}

  if (operacao == "*") {
    console.log (numero1 * numero2)}

 if (operacao == "/") {
    console.log (numero1 / numero2)}




