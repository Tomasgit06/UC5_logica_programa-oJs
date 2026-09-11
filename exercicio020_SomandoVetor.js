function SomarVetor  (vetor) {
    let soma = 0

    for (let i = 0 ; i < vetor.length; i++){ 
        soma += vetor[i]
    }

return soma; 
} 


const numeros = [10, 21, 194, 123, 89, 4]
console.log(SomarVetor(numeros))


