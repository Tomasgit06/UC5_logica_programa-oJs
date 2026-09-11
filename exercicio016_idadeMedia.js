const idade = [10, 20, 32, 15, 4, 43]

let media = 0;

for (let i = 0; i < idade.length; i++) {
    media = media + idade[i]
}

media = media / idade.length 

console.log(media)