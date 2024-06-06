import React, { useState } from 'react'
import Board from './Board'
import './GameStyles.css'
import { calculateWinner } from '../../helpers'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return
    boardCopy[index] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const handleRest = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div>
      <Board board={board} onClick={handleClick} />
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ''}</div>
      )}
      <button className="game-reset-btn" onClick={handleRest}>
        Reset game
      </button>
    </div>
  )
}

export default Game
