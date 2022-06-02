import { createContext, useContext, useEffect, useState } from "react";
import { calcBestMove, getWinner } from "../gameLogic/CalcSquares";
import { ModalContext } from "./Modalcontext";

const GameContext = createContext()

const GameState = (props) => {

    const [screen, setScreen] = useState("start") // start || game 

    const [activeUser, setActiveUser] = useState("x") // x || o
    const [playMode, setPlayMode] = useState("user") // user || cpu

    const [squares, setSquares] = useState(new Array(9).fill("")) // create 9 empty squares 
    const [xnext, setXnext] = useState(false) // x player starts  -- next means after the current turn

    const [winner, setWinner] = useState(null) // x or o or noWinner or null
    const [winnerLines, setWinnerLines] = useState(null) // array of 3 winner indexies

    const [score, setScore] = useState({ x: 0, ties: 0, o: 0 })

    const { showModal, setModalMode, hideModal } = useContext(ModalContext) // order of context important to enable you use it here

    const changePlayMode = (mode) => {
        setPlayMode(mode)
        setScreen("game")
    }

    const handleSquareClick = (index) => {

        if (squares[index] === "") {

            const currentUser = xnext ? "o" : "x" // Who have the turn?

            if (playMode === "cpu" && currentUser !== activeUser) {
                return  // skip the cpu turn if (playmode is cpu & current user isn't what user choosed)
            }

            let squaresCopy = [...squares]   // create copy of squares array
            squaresCopy[index] = xnext ? "o" : "x" // changing each sqaure depending on its index to x or o
            setSquares(squaresCopy) // set the new array of squares

            setXnext(!xnext) // changing the next player

            // check the winner
            checkWinner(squaresCopy)
        }

    }

    const checkWinner = squaresCopy => {

        const isWinner = getWinner(squaresCopy) //imported from Calcsquares
        if (isWinner) { // if there is winner
            setWinner(isWinner.winner) // set winner to x or o
            setWinnerLines(isWinner.lines) // set lines to array of winner indexies

            const scoreCopy = { ...score } // creating copy of score
            scoreCopy[isWinner.winner] += 1 // increasing the score of the einner by one
            setScore(scoreCopy) // setting the new value of score

            showModal() // showing modal message
            setModalMode("winner") // set modal message to winner 
        }
    }

    useEffect(() => { // making check for no winnner case away from click to prevent error from cpu click
        checkNoWinner()

        // section about cpu move
        const currentUser = xnext ? "o" : "x"
        if (playMode === "cpu" && currentUser !== activeUser && !winner) { // check the case which cpu will play    
            setTimeout(() => { // making some delay before cpu play
                cpuNextMove(squares) // calling function which make cpu play
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xnext, winner, screen])

    const returnDefault = () => { // function to reset all states to its default value

        setSquares(new Array(9).fill(""))
        setXnext(false)
        setWinner(null)
        setWinnerLines(null)
        setActiveUser("x")
        setScore({ x: 0, ties: 0, o: 0 })
    }

    const handleQuite = () => {

        returnDefault() // reset states
        hideModal() // hide message
        setScreen("start") // return to start screen
    }

    const handleNextRound = () => {

        setSquares(new Array(9).fill(""))
        setXnext(winner === "o") // making the winner play first
        setWinner(null)
        setWinnerLines(null)
        hideModal()
    }

    const handleReset = () => {
        setModalMode("restart")
        showModal()
    }

    const checkNoWinner = () => { // in case of ties between two players
        const remainedMoves = squares.filter(sq => sq === "") // check for empty squares

        if (remainedMoves.length === 0 && winner !== "x" && winner !== "o") {
            setWinner("noWinner")

            if (winner === "noWinner") {
                const scoreCopy = { ...score } // steps to increase ties by one
                scoreCopy.ties += 1
                setScore(scoreCopy)
            }
            showModal()
        }
    }

    const handleCancel = () => {
        hideModal()
    }

    const handleRestart = () => {
        handleQuite()
    }

    const cpuNextMove = (squares) => {
        const bestmove = calcBestMove(squares, activeUser === "x" ? "o" : "x")// get the index of next move for cpu
        //steps for filling the empty cell by the cpu
        let squaresCopy = [...squares]
        squaresCopy[bestmove] = activeUser === "x" ? "o" : "x"
        setSquares(squaresCopy)
        setXnext(!xnext)
        checkWinner(squaresCopy)
    }

    return (
        <GameContext.Provider
            value={{
                screen, setScreen,
                changePlayMode,
                activeUser, setActiveUser,
                playMode, setPlayMode,
                handleSquareClick,
                winnerLines,
                squares, xnext,
                handleNextRound,
                handleQuite,
                handleReset,
                score, winner,
                handleCancel,
                handleRestart
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameState }