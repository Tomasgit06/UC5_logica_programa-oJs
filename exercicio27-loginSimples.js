const prompt = require('prompt-sync')()

let usuario = prompt("Digite seu nome: ")

let senha = Number(prompt("Digite sua senha: "))


if (usuario == "resenhaAura" && senha == 6767) {
   console.log ("Bem vindo a sua conta!")
} else {
  console.log ("Usuario ou senha incorretos")
}