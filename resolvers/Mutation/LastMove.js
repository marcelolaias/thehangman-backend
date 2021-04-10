const { lastMoves, words, nextId } = require('../../data/db')

function now() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()
    return `${dd}/${mm}/${yyyy}`
}

function createGame() {
    let indexWord = Math.floor(Math.random() * 30) //+ 6

    return {
        id: 0,//nextId(),
        date: now(),
        word: words[indexWord],
        errors: 0,
        finished: false,
        submittedLetters: '',
        screen: "game",
        step: "game"
    }
}

function checkGameHits(index) {
    let uniqueLetters = [...new Set(lastMoves[index].word.word.split(""))];
    let value = lastMoves[index].submittedLetters.length - lastMoves[index].errors;
    if (uniqueLetters.length === value) {
        lastMoves[index].finished = true
        lastMoves[index].step = "WINNER"
    }

    return lastMoves[index]
}

function checkSubimittedLetterErrors(index, letter) {
    let result = lastMoves[index].word.word.toLowerCase().indexOf(letter.toLowerCase());
    if (result >= 0) {
        return checkGameHits(index);
    }

    lastMoves[index].errors++;

    if (lastMoves[index].errors >= 6) {
        lastMoves[index].step = "LOSER";
        lastMoves[index].errors = 6;
    }

    return lastMoves[index]
}

const mutations = {
    newGame: function () { return createGame() },
    saveGame: function (
        parent,
        args
    ) {
        let lastMove = {}
        let index = 0

        // Pesquisar jogo
        index = lastMoves.findIndex(p => p.id === args.id)
        if (index < 0) {
            //Novo jogo
            lastMove = createGame()
            lastMove.id = nextId()
            if (args.word) {
                // Pesquisar palavra
                index = words.findIndex(p => p.word.toLowerCase() === args.word.toLowerCase())
                if (index < 0) return null
                lastMove.word = words[index]
            }
            lastMoves.push(lastMove)
        }
        else {
            //Atualizar dados do jogo
            delete args.word
            delete args.submittedLetters
            lastMoves[index] = lastMove = {
                ...lastMoves[index],
                ...args
            }
        }

        return lastMove
    },
    submitLetter: function (
        parent,
        args
    ) {
        const { id, letter, word } = args

        index = lastMoves.findIndex(p => p.id === id)
        if (index < 0) {
            if (word) {
                const ng = mutations.saveGame(parent, args)
                index = lastMoves.findIndex(p => p.id === ng.id)
            }
        } 
        if (lastMoves[index].finished) return null

        let arrLetters = lastMoves[index].submittedLetters.split("")
        arrLetters.push(letter);
        lastMoves[index].submittedLetters = arrLetters.join("")

        const lastMove = checkSubimittedLetterErrors(index, letter)

        return lastMove
    },
    checkLetter: function (
        parent,
        args
    ) {
        const { id, letter } = args

        index = lastMoves.findIndex(p => p.id === id)
        if (index < 0) return null

        return lastMoves[index].submittedLetters.find((l) => {
            return l.toLowerCase() === letter.toLowerCase();
        });
    }
}

module.exports = mutations