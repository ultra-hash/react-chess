import { Component } from "react";
import "./index.css"

const rows = [8, 7, 6, 5, 4, 3, 2, 1]
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

class Board extends Component {
    state = { rows, columns }

    generateBoard() {
        const { rows, columns } = this.state
        return (
            <div className="board">
                {
                    rows.map((row, rowIndex) => (<div className="board-row" key={row}>
                        {
                            columns.map((column, columnIndex) => {
                                let squareColor = (rowIndex + columnIndex) % 2 === 0 ? 'white-square' : 'black-square'
                                let showRowIndicator = column === 'a'
                                let showColumnIndicator = row === 1
                                return (<div className={`board-square ${squareColor}`} key={column}>
                                    <div className={showRowIndicator ? 'top-left' : ''}>{showRowIndicator && row}</div>
                                    <div>{ }</div>
                                    <div className={showColumnIndicator ? 'bottom-right' : ''}>{showColumnIndicator && column}</div>
                                </div>)
                            })
                        }
                    </div>))
                }
            </div>
        )
    }

    render() {
        return this.generateBoard()
    }
}
export default Board