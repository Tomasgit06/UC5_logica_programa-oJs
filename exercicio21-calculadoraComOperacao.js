const prompt = require('prompt-sync')()

let numero1 = Number(prompt("Digite um numero: "))
let numero2 = Number(prompt("Digite outro numero: "))
let operacao = prompt("Escolha uma operacao: ")


if (operacao == "+" )  {
   console.log ("A soma desse numero é:" + (numero1 + numero2))
} else if (operacao == "-") {
  console.log ("a subtracao desse numero é:" + (numero1 - numero2))
} else if (operacao == "*") {
  console.log ("a multiplicação desse numero é:" + (numero1 * numero2))
} else if (operacao == "/") {
  console.log ("a divisao desse numero é:" + (numero1 / numero2))
}