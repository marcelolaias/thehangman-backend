const { lastMoves } = require('../../data/db.js')

module.exports = {
    lastMoves() {
        return lastMoves
    },
    lastMove(parent, args) {
        const found = lastMoves.filter(p => p.id === args.id)
        return found ? found[0] : null
    }     
}