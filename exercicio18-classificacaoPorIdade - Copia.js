const prompt = require ('prompt-sync')()

console.log ("faixa etaria")

let idade = Number(prompt("Digite sua idade: "))

if (idade <= 11) {
   console.log ("Classificação: criança ")
} else if (idade <= 17) {
   console.log ("Classificação: adolescente")
} else if (idade <= 55) {
   console.log ("Classificação: adulto")}
  else {
   console.log ("classificação: idoso")}