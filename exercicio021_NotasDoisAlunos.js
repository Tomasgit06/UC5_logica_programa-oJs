const notas = [
   [10, 6, 9],
   [7, 2, 10]
]

for (let i = 0; i < notas.length; i++) {
    let soma = 0;

    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
    }
    
let media = soma / notas[i].length;

console.log("aluno " + ": " + media)

}