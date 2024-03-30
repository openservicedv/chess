const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
//
// export class Cell {
//     constructor(pos, piece) {
//         this.pos = pos
//         this.piece = piece
//     }
// }

const range = (n, f) => {
    if (typeof f === 'undefined') {
        return Array.from({length: n}, (_, i) => i + 1)
    } else {
        return Array.from({length: n}, (_, i) => f)
    }

}
const tempArr = FEN
    .split(' ')[0]
    .split("/")
    .join('')
    .split('')
    .map((el, index, array) =>
        Number(el) ? range(el, '') : el)
    .flat()


console.log(tempArr)
