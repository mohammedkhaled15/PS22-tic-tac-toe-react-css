import React from 'react'

const Restart = () => {
  return (
    <div className='restart'>
      <h3 className="restart__title">restart game?</h3>
      <div className="restart__btns">
        <button className='btn btn-sm'>no, cancel</button>
        <button className='btn btn-sm btn-yellow'>yes, restart</button>
      </div>
    </div>
  )
}

export default Restart