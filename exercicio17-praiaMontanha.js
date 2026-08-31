const prompt = require ('prompt-sync')()

let temperatura = Number(prompt("Digite a temperatura do dia para eu indicar o melhor passeio: "))


if (temperatura >= 28) {
   console.log ("Eu indico ir para a praia!")
} else { 
  console.log ("Eu indico ir para as montanhas!")

}