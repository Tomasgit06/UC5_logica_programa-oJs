const prompt = require('prompt-sync')()

let jogador1 = prompt("Escolha: ")
let jogador2 = prompt("Escolha: ")

if (jogador1 == "tesoura" && jogador2 == "tesoura"){
   console.log("Empate!")
} else if (jogador1 == "papel" && jogador2 == "papel"){
   console.log("Empate!")
}  else if (jogador1 == "pedra" && jogador2 == "pedra"){
   console.log("Empate!")
} else if (jogador1 == "pedra" && jogador2 == "papel"){
   console.log("Vitoria do jogador 2!")
} else if (jogador1 == "pedra" && jogador2 == "tesoura"){
   console.log("Vitoria do jogador 1!")
}  else if (jogador1 == "papel" && jogador2 == "tesoura"){
   console.log("Vitoria do jogador 2!")
}

