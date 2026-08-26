const prompt = require('prompt-sync')()

console.log ("Desconto idoso")

let idade = Number(prompt("Qual sua idade?:"))

let estudante = prompt ("você é estudante?")


if (idade >=60 || estudante=== "sim") {
   console.log ("Você tem desconto!")
} 
else { 
  console.log ("Você NAO tem")}