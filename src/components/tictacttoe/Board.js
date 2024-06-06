import Cell from './Cell'

const Board = (props) => {
  return (
    <div className="game-board">
      {props.board.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
          ></Cell>
        )
      })}
    </div>
  )
}

export default Board
