const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiornome = cidades.reduce((a, b) => {
    let maiorSting = a;
    if (b.length > maiorSting.length) {
        maiorSting = b;
    } else {
        maiorSting = a;
    }
    return maiorSting;
})

console.log(maiornome);