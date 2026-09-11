const temperatura = [
   [12, 25, 31],
   [41, 23, 33],
   [20, 31, 21],
   [12, 23, 10]
];

let maior = 0;

for (let i = 0; i < temperatura.length; i++) {
    for (let j = 0; j < temperatura[i].length; j++) {
        if (temperatura[i][j] > maior) {
            maior = temperatura[i][j];
        }
    }
}

console.log(maior);