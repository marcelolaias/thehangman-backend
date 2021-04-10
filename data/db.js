let id = 1
function nextId() {
    return id++
}

const lastMoves = []
const words = [
    { tip: 'Fruta', word: 'Ameixa' },
    { tip: 'Modelo de Carro, Fiat', word: 'Uno' },
    { tip: 'Utensilhos de Cozinha', word: 'Panela' },
    { tip: 'Modelo de Carro, Hiunday', word: 'HB20' },
    { tip: 'Modelo de Carro, GM', word: 'Omega' },
    { tip: 'Modelo de Carro, GM', word: 'Monza' },
    { tip: 'Fruta', word: 'Amora' },
    { tip: 'Utensilhos de Cozinha', word: 'Colher' },
    { tip: 'Fruta', word: 'Abacaxi' },
    { tip: 'Utensilhos de Cozinha', word: 'Garfo' },
    { tip: 'Modelo de Carro, VW', word: 'Gol' },
    { tip: 'Material de escritório', word: 'Borracha' },
    { tip: 'Modelo de Carro, VW', word: 'Parati' },
    { tip: 'Modelo de Carro, Ford', word: 'Ecosport' },
    { tip: 'Modelo de Carro, Honda', word: 'Civic' },
    { tip: 'Modelo de Carro, GM', word: 'Opala' },
    { tip: 'Fruta', word: 'Abacate' },
    { tip: 'Material de escritório', word: 'Lapis' },
    { tip: 'Modelo de Carro, GM', word: 'Prisma' },
    { tip: 'Fruta', word: 'Banana' },
    { tip: 'Utensilhos de Cozinha', word: 'Frigideira' },
    { tip: 'Modelo de Carro, VW', word: 'FOX' },
    { tip: 'Modelo de Carro, GM', word: 'Celta' },
    { tip: 'Utensilhos de Cozinha', word: 'Forno' },
    { tip: 'Fruta', word: 'Caja' },
    { tip: 'Utensilhos de Cozinha', word: 'Faca' },
    { tip: 'Modelo de Carro, VW', word: 'Santana' },
    { tip: 'Fruta', word: 'Damasco' },
    { tip: 'Fruta', word: 'Pinha' },
    { tip: 'Utensilhos de Cozinha', word: 'Geladeira' },
    { tip: 'Fruta', word: 'Uva' },
    { tip: 'Utensilhos de Cozinha', word: 'Microondas' },
    { tip: 'Modelo de Carro, VW', word: 'Fusca' },
    { tip: 'Material de escritório', word: 'Caneta' },
    { tip: 'Modelo de Carro, Fiat', word: '500' },
    { tip: 'Material de escritório', word: 'Tesoura' },
    { tip: 'Modelo de Carro, Hiunday', word: 'Sonata' },
    { tip: 'Modelo de Carro, VW', word: 'Brasilha' },
    { tip: 'Material de escritório', word: 'Grampeador' },
]


module.exports = { nextId, words, lastMoves }