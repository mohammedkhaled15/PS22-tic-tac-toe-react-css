import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modalcontext'
import Restart from './Restart'
import Win from './Win'

const Modal = () => {
    const { show, modalMode } = useContext(ModalContext)
    return (
        <>
            {
                show &&
                (
                    <div className='modal'>
                        <div className="modal__content">
                            <div className="container">
                                {modalMode === "winner" && <Win />}
                                {modalMode === "restart" && <Restart />}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Modal