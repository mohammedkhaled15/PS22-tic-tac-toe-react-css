import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'

const Win = () => {
    const { winner, handleQuite, handleNextRound, activeUser, playMode } = useContext(GameContext)
    return (
        <div className='score'>
            {winner && winner !== "noWinner" ? (
                <>
                    <p>{playMode === "user" ? "You Win!" : playMode === "cpu " && activeUser !== winner ? "CPU Wins!" : ""}</p>
                    <h3 className='score__title'>
                        {winner === "x" ? <Xicon /> : <Oicon />} Take the Round
                    </h3>
                </>
            ) : (
                <>
                    <h3 className='score__title'>
                        No Winner
                    </h3>
                </>
            )}
            <div className="score__btns">
                <button className='btn btn-sm' onClick={handleQuite}>Quit</button>
                <button className='btn btn-sm btn-yellow' onClick={handleNextRound}>next round</button>
            </div>
        </div>
    )
}

export default Win