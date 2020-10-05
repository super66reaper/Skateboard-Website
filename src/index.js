import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//CRUD
//Create
//Read
//Upload
//Delete

const board = [
  {
    id: 1,
    board: 'Santa Cruz',
    gripTape: 'Mob',
    trucks: 'Independent',
    wheels: 'Spit Fire'
  },
  {
    id: 2,
    board: 'Death Wish',
    gripTape: 'Mob',
    trucks: 'Independent Hollow',
    wheels: 'Bones'
  }
]

ReactDOM.render(
  <App board={board} />,
  document.getElementById('root')
);