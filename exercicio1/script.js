let carrinho = []

const produto1 = {
    nome: 'Mouse',
    preço: 200,
    disponibilidade: true,
}
const produto2 = {
    nome: 'Teclado',
    preço: 350,
    disponibilidade: true,
}
const produto3 = {
    nome: 'headset',
    preço: 500,
    disponibilidade: false,
}

carrinho.push(produto1, produto2, produto3)

console.log('Carrinho: ', carrinho)