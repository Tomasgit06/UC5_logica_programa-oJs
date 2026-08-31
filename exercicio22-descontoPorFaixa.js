const prompt = require('prompt-sync')()

let valorCompra = Number(prompt("Digite o valor da compra: "))

if (valorCompra >= 500) {
    let valorFinal = valorCompra - (valorCompra * 0.2)
    console.log("Valor final: R$ " + valorFinal)
} else if (valorCompra >= 200) {
    let valorFinal = valorCompra - (valorCompra * 0.1)
    console.log("Valor final: R$ " + valorFinal)
} else if (valorCompra >= 100) {
    let valorFinal = valorCompra - (valorCompra * 0.05)
    console.log("Valor final: R$ " + valorFinal)
} else {
    console.log("Sem desconto. Valor final: R$ " + valorCompra)
}