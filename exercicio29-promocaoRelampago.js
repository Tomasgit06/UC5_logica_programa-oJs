const prompt = require('prompt-sync')()

let valor = Number(prompt("Digite o valor da compra: "))

let vip = prompt ("Voce é cliente vip?: ")


if (valor >= 300 || vip == "sim") {
   console.log("Frete gratis")
}else {
  console.log("Frete normal")
} 