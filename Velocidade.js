const prompt = require("prompt-sync")()

console.log ("Velocidade veiculo")


let velocidade = prompt("Digite sua velocidade em km/h:")

if (velocidade >= 100)
   console.log ("Você vai morrer")

else if (velocidade >= 85) {
       console.log ("Alta")}

else if (velocidade >= 50){
       console.log ("Moderada")}

else {
  console.log ("Baixa")}