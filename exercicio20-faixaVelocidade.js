const prompt = require('prompt-sync')()

let velocidade = Number(prompt("Digite sua velocidade: "))


if (velocidade >= 120){
    console.log("Classificação:muito alta")
} else if (velocidade >= 60){
          console.log ("Classificação: alta")
} else if (velocidade >= 40){
          console.log ("Classificação: moderada")}
  else {
  console.log ("Classificação: baixa")
}