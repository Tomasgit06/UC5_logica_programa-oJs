const prompt = require('prompt-sync')()

let horas = Number(prompt("Digite quantas horas ficou estacionado: "))

let total

if (horas <= 1) {
    total = 5
} else if (horas <= 4) {
    total = horas * 4
} else {
    total = horas * 3
}

console.log("Total a pagar: R$ " + total)
