// import React from 'react';
import './cell-styles.css';
import {Piece} from "../piece";

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
export const Cell = ({cell, index}) => {
    const light = isLightSquare(cell.pos, index);

    return (
        <div className={`cell ${light ? 'light' : 'dark'}`}>
            <Piece
                pos={cell.pos}
                name={cell.piece}
            />
        </div>
    )
};
