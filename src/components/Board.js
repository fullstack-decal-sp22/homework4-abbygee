import React, { useState } from 'react';
import './styles/Board.css';
import Square from "./Square";

function Board() {
  const [status, setStatus] = useState("X"); //symbol
  const [squares, setSquares] = useState(['','','','','','','','','']); //status

  function renderSquare(i) {
      return <Square onClick = {() => handleClick(i)} value = {squares[i]}/>;
  }

  function handleClick(i) {
      let handleSquare = squares.slice();
      handleSquare[i] = status;

      if (status === "X") {
        setStatus("O");
      } else {
        setStatus("X");
      }

      setSquares(handleSquare);
  }

  function updateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = updateWinner();

  return (  
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="status">Current Player: {status}</div>
        <div className="status">Winner: {winner}</div>
      </div>
  )
}

export default Board;