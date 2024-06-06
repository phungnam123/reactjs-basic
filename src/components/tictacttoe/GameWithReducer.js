import React, { useReducer, useState } from 'react'
import Board from './Board'
import './GameStyles.css'
import { calculateWinner } from '../../helpers'

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
}
const gameReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK': {
      const { board, xIsNext } = state
      const { index, winner } = action.payload

      if (winner || board[index]) return state

      const nextState = JSON.parse(JSON.stringify(state))
      nextState.board[index] = xIsNext ? 'X' : 'O'
      nextState.xIsNext = !xIsNext
      // console.log(nextState)
      return nextState
    }

    case 'RESET': {
      const nextState = JSON.parse(JSON.stringify(state))
      nextState.board = Array(9).fill(null)
      nextState.xIsNext = true
      return nextState
    }

    default:
      console.log('ERROR')
      break
  }
  return state
}

const GameWithReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  //   console.log(dispatch)

  const winner = calculateWinner(state.board)

  const handleClick = (index) => {
    dispatch({
      type: 'CLICK',
      payload: {
        index,
        winner,
      },
    })
  }

  const handleRest = () => {
    // setBoard(Array(9).fill(null))
    // setXIsNext(true)
    dispatch({
      type: 'RESET',
    })
  }

  return (
    <div>
      <Board board={state.board} onClick={handleClick} />
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset-btn" onClick={handleRest}>
        Reset game
      </button>
    </div>
  )
}

export default GameWithReducer
