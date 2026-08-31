const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))

let estudante = prompt("Voce é estudante?: ")


if (estudante == "sim" || idade >= 60) {
   console.log ("Voce tem direito ao desconto")
} else { 
  console.log ("Voce nao tem direito ao desconto")
}