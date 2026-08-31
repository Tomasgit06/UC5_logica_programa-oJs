const prompt = require('prompt-sync')()

let valor =  Numero(prompt("qual foi o valor da compra? " ))

let nota = Number(prompt("Qual é a nota do atendimento?: " ))

let gorjeta


if (nota >= 8 )
    gorjeta = (valor * 0.15)
    console.log ("gorjeta sugerida " + valor)
} else if (nota >= 5) {
  gorjeta = (valor * 0.10)
  console.log (""gorjeta sugerida " + valor)
} else (nota <= 4) {
  console.log ("Gorjeta opcional")
}



