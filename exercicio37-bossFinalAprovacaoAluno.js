const prompt = require('prompt-sync')()

let nome = prompt("Digite o nome do aluno: " )

let nota1 = Number(prompt("digite sua nota: "))
let nota2 = Number(prompt("digite sua nota: "))
let nota3 = Number(prompt("digite sua nota: "))

let frequencia = Number(prompt("Digite sua frequencia: ")) 

let media = Number

let situacao 

media = (nota1 + nota2 + nota3)/3

if (media >= 7 && frequencia >= 75) {
   situacao = ("Aprovado")
} else if (media >= 5 && frequencia >= 75) {
  situacao = ("Recuperacao")
} else if (media < 5 ) { 
 situacao =("reprovado por nota")
} else if (frequencia < 75 ) {
  situacao = ("reprovado por frequencia")
}

console.log("====== RESULTADO ======" + " / Aluno:" + nome + " / " + "Media:" + media + " / " + "Frequencia:" + frequencia + " / Situação:" + situacao) 
 