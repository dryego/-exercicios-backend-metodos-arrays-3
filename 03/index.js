const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumeroDoArray = numeros.reduce((acumulador, elementoAtual) => {
    let maiorNumero = acumulador;
    if (elementoAtual > maiorNumero) {
        maiorNumero = elementoAtual;
    }
    return maiorNumero;
});

console.log(maiorNumeroDoArray);