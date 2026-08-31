const prompt = require ('prompt-sync')()

let valor = prompt("Digite o valor da sua compra: ")

let pontos = valor / 10

if (valor >= 500) {
    pontos = pontos + 50
}
console.log("Pontos ganhos: " + pontos);