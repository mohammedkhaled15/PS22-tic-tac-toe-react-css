import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

const Restart = () => {
  const { handleCancel, handleRestart } = useContext(GameContext)
  return (
    <div className='restart'>
      <h3 className="restart__title">restart game?</h3>
      <div className="restart__btns">
        <button className='btn btn-sm' onClick={handleCancel}>no, cancel</button>
        <button className='btn btn-sm btn-yellow' onClick={handleRestart}>yes, restart</button>
      </div>
    </div>
  )
}

export default Restart