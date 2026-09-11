function IMC (peso, altura) {
    const imc = peso / (altura * altura)
    if (imc <= 18.5) {
        console.log("abaixo do peso")
    } else if (imc <= 24.9) {
        console.log ("peso normal")
    }   else if (imc <= 29.9) {
        console.log ("sobrepeso")
    } else {
        console.log ("obesidade")
    }
    return (imc)
}

console.log (IMC(60, 1.70))