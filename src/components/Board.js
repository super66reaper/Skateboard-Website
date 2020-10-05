import React from 'react'

const Board = ({ board }) => {
    return (
        <li>
            Board: {board.board} 
            <p></p>
            GripTape: {board.gripTape}
            <p></p>
        </li>
    )
}

export default Board