import React from 'react';
import './board-styles.css'
import {Cell} from "../cell";

export const Board = ({cells, ...props}) => {
    // console.log(cells)
    return (
        <div className='board'>
            {cells.map((cell, index) => (
                <Cell
                    key={cell.pos}
                    cell={cell}
                    index={index}
                    {...props}
                />
            ))}
        </div>
    );
};
