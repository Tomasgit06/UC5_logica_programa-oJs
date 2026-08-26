const prompt = require("prompt-sync")()

let numero1 = Number(prompt ("Digite um numero:"));
let numero2 = Number(prompt ("Digite um numero:"));

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log ("A soma é: " + soma)
console.log ("A subtracao é: " + subtracao)
console.log ("multiplicacao é: " + multiplicacao)
console.log ("Divisao é: " + divisao)
