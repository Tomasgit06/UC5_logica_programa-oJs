let precos = [10, 25, 8, 40, 15]

let referencia = 20

let contadorAcima = 0
let somaAbaixo = 0

for (let preco of precos) {
    if (preco > referencia) {
        contadorAcima++
    } else {
        somaAbaixo = somaAbaixo + preco
    }
}

console.log("Quantidade acima da referência: " + contadorAcima)
console.log("Soma dos preços abaixo da referência: " + somaAbaixo)