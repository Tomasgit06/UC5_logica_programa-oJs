const prompt = require('prompt-sync')()

let valorCompra = Number(prompt("Digite o valor da compra: "))

if (valorCompra >= 100) {
    let valorFinal = valorCompra - (valorCompra * 0.1)
    console.log("Valor final: R$ " + valorFinal)
} else {
    console.log("Valor final: R$ " + valorCompra)
}