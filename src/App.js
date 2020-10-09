import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './components/Board'
function App() {
  const [skateboards, setBoards] = useState([])
  const [newBoard, setNewBoard] = useState('a new board...')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/boards')
      .then(response => {
        console.log('promise fulfilled')
        setBoards(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', skateboards.length, 'skateboards')

  function addBoard(event) {
    event.preventDefault()

    const boardObject = {
      id: skateboards.length + 1,
      board: newBoard
    }

    axios 
      .post('http://localhost:3001/boards', boardObject)
      .then(response => {
        setBoards(skateboards.concat(response.data))
        setNewBoard('')
      })
  }

  function deleteBoardOf(itemId) {
    console.log('delete the board with id: ' + itemId - 1)

    skateboards.findIndex(skateboards.find(board => board.id === itemId))
    axios.delete('http://localhost:3001/boards/' + itemId)
      .then(response => {
        setBoards(response.data)
      });
  }

  function handleBoardChange(event) {
    console.log(event.target.value)
    setNewBoard(event.target.value)
  }

  return (
    <div className="Main">
       <h1>Skateboard Website</h1>
       <ul>
         {skateboards.map(board =>
          <Board 
            key = {board.id} 
            skateboard={board}
            deleteBoard={() => deleteBoardOf(board.id)} 
          />
          )}
       </ul>

       <form onSubmit={addBoard}>
         <input 
         value={newBoard}
         onChange = {handleBoardChange}
         />
         <button type="submit">save</button>
       </form>
    </div>
  )
}

export default App;