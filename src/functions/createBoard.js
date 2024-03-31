class Cell {
    constructor(pos, piece) {
        this.pos = pos
        this.piece = piece
    }
}
const range = (n, f) => {
    if (typeof f === 'undefined') {
        return Array.from({length: n}, (_, i) => (i + 1).toString())
    } else {
        return Array.from({length: n}, (_, i) => f)
    }
}
export const createBoard = (fenString) => {
    const pieces = fenString
        .split(' ')[0]
        .split("/")
        .join('')
        .split('')
        .map((el, index, array) =>
            Number(el) ? range(el, '') : el)
        .flat()

    const board = []

    const rows = range(8).reverse()

    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        for (let j = 0; j < columns.length; j++) {
            board.push(columns[j].concat(row))
        }
    }

    for (let i = 0; i < board.length; i++) {
        board.splice(i, 1, new Cell(board[i], pieces[i]))
    }
    // console.log(board)
    return board
}



