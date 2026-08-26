
const prompt = require("prompt-sync")()

console.log  ("Verificador de nota")

let nota = prompt ("Digite sua nota:")

if (nota == 10){
  console.log ("Classificação: Excelente")}

 else if (nota >= 7){
   console.log ("Classificação: Bom")}

 else if (nota >= 5){
   console.log ("Classificação: Regular")}

 else if (nota <= 4){
   console.log ("Classificação: Insuficiente")}
