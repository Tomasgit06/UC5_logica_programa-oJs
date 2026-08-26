const prompt = require("prompt-sync")()

console.log ("Verificador de idade")

let idade = prompt ("Digite sua idade:")

if (idade  <= 11) 
 console.log ("Voce é criança")
else if (idade <= 17) {
   console.log ("Voce é adolescente")
} else if (idade <= 60) { 
   console.log ("voce é adulto")
} else {
  console.log ("Voce é idoso")
}
