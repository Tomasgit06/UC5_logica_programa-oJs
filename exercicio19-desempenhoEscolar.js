const prompt = require ('prompt-sync')()

let nota = Number(prompt("Digite sua nota: "))

if (nota == 10) {
   console.log("Classificação: execelente")}
else if (nota >= 7) {
   console.log("Classificação: bom")}
else if (nota >= 5) {
   console.log("Classificação: regular")}
else {
 console.log ("Insuficiete")
}