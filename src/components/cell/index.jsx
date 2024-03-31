import './cell-styles.css';
import {Piece} from "../piece";
import {GameContext} from "../../context/GameContext";
import {useContext} from "react";

const isLightSquare = (position, i) => {
    const row = position[1];
    const isEven = (x) => !(x % 2);

    if (isEven(row) && !isEven(i + 1)) {
        return true;
    }

    if (isEven(i + 1) && !isEven(row)) {
        return true;
    }
    return false;
};
export const Cell = ({cell, index, makeMove, setFromPos}) => {
    const light = isLightSquare(cell.pos, index);
    const {possibleMoves} = useContext(GameContext);
    const isPossibleMove = possibleMoves.includes(cell.pos);
    const handleDrop = () => {
        makeMove(cell.pos);
    };
    return (
        <div
            className={`cell ${light ? 'light' : 'dark'}`}
            onDrop={handleDrop}
            onDragOver={event => event.preventDefault()}
        >
            <div className={`overlay ${isPossibleMove && 'possible-move'}`}>>
                <Piece
                    pos={cell.pos}
                    name={cell.piece}
                    setFromPos={setFromPos}
                />
            </div>
        </div>
    )
};
