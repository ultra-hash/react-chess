import { Component } from "react";
import { FaChessPawn, FaChessKing, FaChessQueen, FaChessBishop, FaChessKnight, FaChessRook } from 'react-icons/fa6'
import "./index.css"

const rows = [8, 7, 6, 5, 4, 3, 2, 1]
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const squareIdAndValueMap = {}

for (let row of rows) {
    for (let column of columns) {
        squareIdAndValueMap[`${column}${row}`] = {
            id: '',
            location: column + row,
            type: '',
        }
    }
}

const whites = {
    pawns: [
        {
            id: 'p1',
            location: 'a2',
            type: 'pawn'
        },
        {
            id: 'p2',
            location: 'b2',
            type: 'pawn'
        },
        {
            id: 'p3',
            location: 'c2',
            type: 'pawn'
        },
        {
            id: 'p4',
            location: 'd2',
            type: 'pawn'
        },
        {
            id: 'p5',
            location: 'e2',
            type: 'pawn'
        },
        {
            id: 'p6',
            location: 'f2',
            type: 'pawn'
        },
        {
            id: 'p7',
            location: 'g2',
            type: 'pawn'
        },
        {
            id: 'p8',
            location: 'h2',
            type: 'pawn'
        }
    ],
    special: [
        {
            id: 'rook-1',
            location: 'a1',
            type: 'rook'
        },
        {
            id: 'rook-2',
            location: 'h1',
            type: 'rook'
        },
        {
            id: 'knight-1',
            location: 'b1',
            type: 'knight'
        },
        {
            id: 'knight-2',
            location: 'g1',
            type: 'knight'
        },
        {
            id: 'bishop-1',
            location: 'c1',
            type: 'bishop'
        },
        {
            id: 'bishop-2',
            location: 'f1',
            type: 'bishop'
        },
        {
            id: 'king',
            location: 'd1',
            type: 'king'
        },
        {
            id: 'queen',
            location: 'e1',
            type: 'queen'
        },
    ]
}
const blacks = {
    pawns: [
        {
            id: 'p1',
            location: 'a7',
            type: 'pawn'
        },
        {
            id: 'p2',
            location: 'b7',
            type: 'pawn'
        },
        {
            id: 'p3',
            location: 'c7',
            type: 'pawn'
        },
        {
            id: 'p4',
            location: 'd7',
            type: 'pawn'
        },
        {
            id: 'p5',
            location: 'e7',
            type: 'pawn'
        },
        {
            id: 'p6',
            location: 'f7',
            type: 'pawn'
        },
        {
            id: 'p7',
            location: 'g7',
            type: 'pawn'
        },
        {
            id: 'p8',
            location: 'h7',
            type: 'pawn'
        }
    ],
    special: [
        {
            id: 'rook-1',
            location: 'a8',
            type: 'rook'
        },
        {
            id: 'rook-2',
            location: 'h8',
            type: 'rook'
        },
        {
            id: 'knight-1',
            location: 'b8',
            type: 'knight'
        },
        {
            id: 'knight-2',
            location: 'g8',
            type: 'knight'
        },
        {
            id: 'bishop-1',
            location: 'c8',
            type: 'bishop'
        },
        {
            id: 'bishop-2',
            location: 'f8',
            type: 'bishop'
        },
        {
            id: 'king',
            location: 'd8',
            type: 'king'
        },
        {
            id: 'queen',
            location: 'e8',
            type: 'queen'
        },
    ]
}


for (let piece of whites.pawns) {
    piece.color = '#ffffff'
    squareIdAndValueMap[piece.location] = piece
}

for (let piece of blacks.pawns) {
    piece.color = '#000000'
    squareIdAndValueMap[piece.location] = piece
}

for (let piece of whites.special) {
    piece.color = '#ffffff'
    squareIdAndValueMap[piece.location] = piece
}

for (let piece of blacks.special) {
    piece.color = '#000000'
    squareIdAndValueMap[piece.location] = piece
}


class Board extends Component {
    state = { rows, columns, squareIdAndValueMap, activePiece: '' }


    onClickSquare(id) {
        const { activePiece } = this.state
        const piece = squareIdAndValueMap[id]

        if (activePiece) {
            // if activeplece exits move active piece to the current selected squares

            if (activePiece !== piece && activePiece.color !== piece.color) {

                // updating piece to current location
                squareIdAndValueMap[id] = activePiece

                // removing piece from previouly active location
                squareIdAndValueMap[activePiece.location] = {
                    id: '',
                    location: activePiece.location,
                    type: '',
                }
                // updating piece location to current location 
                squareIdAndValueMap[id].location = id
            }

            //removeing current active piece
            this.setState({ activePiece: '' })
        } else if (piece.type) {
            this.setState({ activePiece: piece })
        } else {
            this.setState({ activePiece: '' })
        }
        console.log(piece)
    }

    loadIcon(id) {
        const object = squareIdAndValueMap[id]
        let jsx = null
        switch (object.type) {
            case "pawn":
                jsx = <FaChessPawn className="piece" color={object.color} />
                break;

            case "king":
                jsx = <FaChessKing className="piece" color={object.color} />
                break

            case "queen":
                jsx = <FaChessQueen className="piece" color={object.color} />
                break;

            case "bishop":
                jsx = <FaChessBishop className="piece" color={object.color} />
                break

            case "knight":
                jsx = <FaChessKnight className="piece" color={object.color} />
                break;

            case "rook":
                jsx = <FaChessRook className="piece" color={object.color} />
                break

            default:
                jsx = ''
                break;
        }

        return jsx
    }

    generateBoard() {
        const { rows, columns, activePiece } = this.state
        return (
            <div className="board">
                {
                    rows.map((row, rowIndex) => (<div className="board-row" key={row}>
                        {
                            columns.map((column, columnIndex) => {
                                let squareColor = (rowIndex + columnIndex) % 2 === 0 ? 'white-square' : 'black-square'
                                let showRowIndicator = column === 'a'
                                let showColumnIndicator = row === 1
                                return (
                                    <div className={`board-square ${squareColor} ${activePiece.location === column + row ? 'active-piece' : ''}`}
                                        key={column} id={column + row}
                                        onClick={() => this.onClickSquare(column + row)}
                                        onKeyUp={() => { }} // fix for sonarlint problem 
                                    >
                                        <div className={showRowIndicator ? 'top-left' : ''}>{showRowIndicator && row}</div>
                                        <div className="center-center">{this.loadIcon(column + row)}</div>
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