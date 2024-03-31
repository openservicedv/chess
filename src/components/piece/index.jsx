import './piece-styles.css';
import {useRef} from "react";
export const Piece = ({name, pos, setFromPos}) => {

    const color = name === name.toUpperCase() ? 'w' : 'b'
    const imageName = color + name.toUpperCase()
    const element = useRef();
    
    let image;

    try {
        image = require(`../../assets/pieces/${imageName}.png`)
    } catch (error) {
        image = require(`../../assets/pieces/empty.png`)
    }
    const handleDragStart = () => {
        setFromPos(pos);
        setTimeout(() => {
            element.current.style.display = 'none';
        }, 0);
    };
    const handleDragEnd = () => {
        element.current.style.display = 'block';
    };

    return (
        <img
            className='piece'
            src={image}
            alt=''
            draggable={true}
            ref={element}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        />
    );
};
