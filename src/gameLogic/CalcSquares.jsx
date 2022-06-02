
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

export function getWinner(squares) {

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

export function calcBestMove(squares, currentUser) {

    const getRepeatedSymbol = (arr => { // calculate how many repeated symbols for each expected solution, to sort the solutions
        let count = 0 // count of repeated symbols
        arr.forEach(index => {
            if (squares[index] === currentUser) { // check for each array if the are repeated values
                count += 1
            }
            return count
        })
    })

    const sortedLines = lines.sort((a, b) => { // sorting the lines from most repeated symbols to less ones
        const acount = getRepeatedSymbol(a) // using sorting function which is created above
        const bcount = getRepeatedSymbol(b)
        return bcount - acount // returning difference between countrs to sort them
    })

    for (let i = 0; i < sortedLines.length; i++) { // looping on the sorted array to find empty cells 

        let val = sortedLines[i].find((el) => { // get the cell which have to fill it first
            if (squares[el] === "") { // the cell must be empty
                return el + "" // returning value added to empty string to convert it into string to prevent error of false
            }
            return false
        })
        if (!val) { // check if there is no empty in that array 
            continue;
        } else {
            return +val // if value exists return it 
        }
    }
}