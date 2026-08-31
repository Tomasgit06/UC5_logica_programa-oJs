const prompt = require('prompt-sync')()

let dias = Number(prompt("Digite quantos dias voce pretende vir a academia: "))

let plano

if (dias <= 2) {
   plano = ("Plano sugerido: Basico")
} else if (dias <= 4) { 
  plano = ("Plano sugerido: Intermediario") 
} else if (dias >= 5) {
   plano = ("Plano sugerido: Premium")
}

console.log(plano)
