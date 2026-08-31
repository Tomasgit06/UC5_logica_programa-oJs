const prompt = require ('prompt-sync')()

let tempoEmpresa = Number(prompt("Digite seu tempo de empresa: "))
let desempenho = prompt("Qual seu desempenho aqui na empresa?: ")
let salario = Number(prompt("Qual o seu salario?: "))

let reajuste

if (tempoEmpresa >= 5 && desempenho == "otimo") {
    reajuste = ("reajuste de: " + salario * 1.15)
    console.log (reajuste)
} else if (tempoEmpresa >= 2 && desempenho == "bom" ) {
    reajuste = ("reajuste de: " + salario * 1.08)
    console.log (reajuste)
} else {
    reajuste = ("reajuste de: " + salario *+ 1.03)
  console.log (reajuste)
}
 