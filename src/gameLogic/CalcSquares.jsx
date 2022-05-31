import React from 'react'

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function getWinner(squares) {

    for (let i = 0; i < lines.length; i++) { // looping on all values of expected winner lines

        const [a, b, c] = lines[i] // array distructuring to declare variables

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // check for equality

            return {
                winner: squares[a], // who is winner? x or o 
                lines: lines[i] // lines which wins to apply active class on it
            }
        }
    }
    return null
}

export default getWinner