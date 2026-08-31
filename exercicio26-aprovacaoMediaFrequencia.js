const prompt = require('prompt-sync')()

let nota = Number(prompt("Fale sua nota: "))

let frequencia = (prompt("Fale sua frequencia: "))


if (nota >= 7  && frequencia >= 75) {
 console.log("Aprovado")
} else {
  console.log ("Reprovado")
}