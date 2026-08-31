const prompt = require('prompt-sync')()

let senha = Number(prompt("Digite sua senha: "))

if (senha == 6767) {
   console.log ("Bem vindo a sua conta!")
} else {
   console.log ("Sai daqui praga")
}
