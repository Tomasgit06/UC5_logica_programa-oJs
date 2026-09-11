function maiorValor(numeros) {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}
 
console.log(maiorValor([4, 170, 2, 9, 23, 5])); 
