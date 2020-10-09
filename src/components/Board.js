import React from 'react'

const Board = ({ skateboard, deleteBoard }) => {
    return (
        <li>
            ID: {skateboard.id}
            <p></p>
            Board: {skateboard.board} 
            <p></p>
            <button onClick={deleteBoard}>Delete</button>
        </li>
    )
}

export default Board