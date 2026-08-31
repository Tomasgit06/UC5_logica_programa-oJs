const prompt = require('prompt-sync')()

const nome = prompt("Digite seu nome: ")
let matricula = Number(prompt("Digite o numero da sua matricula: "))
let turma = prompt("Qual sua turma?: ")


console.log ("Estudante " + nome + " matricula " + matricula + " cadastrado na turma " + turma)