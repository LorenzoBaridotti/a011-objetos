//A

const pokemon = {
nome: "Bulbasaur",
tipo: "Grama",
nivel: 5
};

const pokemon1 = {
...pokemon,
nome: 'Squirtle',
tipo: 'Água',
}

//B

const ataques = pokemon.ataques = []

pokemon.ataques.push({
nome: 'Investida',
dano: 40,
tipo: 'Normal',
precisão: 100,})


//C

pokemon1.ataques = {...ataques,}

//D

let folhaNavalha = pokemon.ataques = {...pokemon.ataques,
nome: 'Folha Navalha',
dano: 45,
tipo: 'Grama',
precisão: 100,}

//E

let jatoDagua = pokemon1.ataques = {...pokemon1.ataques,
nome: 'Jato de Água',
dano: 40,
tipo: 'Água',
precisão: 100,}


//F

console.log('Bulbasaur: ', pokemon)
console.log('Squirtle: ', pokemon1)