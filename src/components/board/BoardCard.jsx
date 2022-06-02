import React, { useContext } from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../../context/GameContext'


function BoardCard({ user = "nouser", active, index }) {

    const { handleSquareClick } = useContext(GameContext)

    return (
        <div
            className={`card ${active && user === "x" && "shadow-green"} ${active && user === "o" && "shadow-yellow"} ${!active ? "shadow-gray" : "active"}`}
            onClick={() => handleSquareClick(index)}>

            {user === "o" && <Oicon key={index} color={active && "dark"} size="lg" anim={true} />}
            {user === "x" && <Xicon key={index} color={active && "dark"} size="lg" anim={true} />}


        </div >
    )
}

export default BoardCard