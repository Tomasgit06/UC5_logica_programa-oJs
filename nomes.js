const prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome:")
let idade = prompt("digite sua idade:")
let endereco = prompt("digite seu endereco:")

console.log("cadastro salvo o seu nome e: " + (nome) + " tem " + (idade) + " anos " + "seu endereço e:" + (endereco) )