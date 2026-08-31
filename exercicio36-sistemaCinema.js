const prompt = require('prompt-sync')()

const nome = prompt("digite seu nome: ")

let idade = Number(prompt("Digite sua idade "))

let ingresso = prompt("Voce possui ingresso? ")

if (idade <= 14) {
  console.log("idade insuficiente")
} else if (ingresso == "nao") {
  console.log("falta de ingresso")
} else {
  console.log("Entrada liberada")
}