import React from 'react';
import Board from './components/Board'

function App({ board }) {
  return (
    <div className="Main">
       <h1>Skateboard Website</h1>
       <ul>
         {board.map((board, i) =>
          <Board key={i} board={board} />
          )}
       </ul>
    </div>
  );
}

export default App;
