const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))

let renda = Number(prompt("Digite sua renda mensal: "))


if (idade >= 21 && renda >= 2000) {
   console.log ("Emprestimo aprovado")
} else { 
  console.log("emprestimo reprovado")
}