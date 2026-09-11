let  quantidade = 0

for (let i = 1; i <= 50; i++ ) {
    if (i % 7 === 0) {
        console.log(i)
         quantidade = quantidade + 1
    }
  
}

console.log ("total de multiplos é: " + quantidade)
