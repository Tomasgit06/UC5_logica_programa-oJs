const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))
let possuiConvite = prompt("Você possui convite?: ")

if (idade >= 18 && possuiConvite === "sim") {
    console.log("Entrada permitida")
} else {
    console.log("Entrada negada")
}