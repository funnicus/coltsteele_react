import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLightStartsOn: 0.75
  }
  constructor(props) {
    super(props);
    
    this.createBoard = this.createBoard.bind(this);
    this.state = {hasWon: false, board: this.createBoard()};
    this.flipCellsAround = this.flipCellsAround.bind(this);
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    // TODO: create array-of-arrays of true/false values
    let rndVal;
    //Create an array with undefined values
    let board = Array.from(new Array(this.props.ncols), x => new Array(this.props.nrows));
    //Populaing the array with true/false values
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++){
        rndVal = Math.random();
        if(rndVal > this.props.chanceLightStartsOn){
          board[i][j] = true;
        }
        else{
          board[i][j] = false;
        }
      }
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log(coord);
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    
    let curState = {...this.state};

     function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        curState.board[y][x] = !curState.board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    flipCell(y, x);
    
    flipCell(y-1, x);
    
    flipCell(y+1, x);
    
    flipCell(y, x-1);
    
    flipCell(y, x+1);

    function checkWon(board){
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
          if(board[i][j] === true){
            return false;
          }
        }
      }
      return true;
    }
    
    // win when every cell is turned off
    // TODO: determine is the game has been won
    this.setState({
      hasWon: checkWon(curState.board),
      board: curState.board
    })
  }

  generateBoard() {
    return(
      <div>
        <div className="neon-orange">Lights</div>
        <div className="neon-blue">out game</div>
        <table className="Board">
          <tbody>
            {this.state.board.map((i, y) =>
              <tr key={y}>
                {i.map((j, x) => 
                    <Cell 
                      key={`${y}-${x}`}
                      coord={`${y}-${x}`}
                      flipCellsAround={this.flipCellsAround}
                      isLit={this.state.board[y][x]}
                    />)} 
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
  /** Render game board or winning message. */

  render() {
    return(
      <div>
        {this.state.hasWon === false
        ? this.generateBoard()
        : <h1 className="neon-orange">You have won!</h1>}
      </div>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
