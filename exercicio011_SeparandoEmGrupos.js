for (let numero = 1; numero <= 20; numero++) {
    if (numero % 3 === 0) {
        console.log("Grupo A");
    } else if (numero % 5 === 0) {
        console.log("Grupo B");
    } else {
        console.log(numero);
    }
}