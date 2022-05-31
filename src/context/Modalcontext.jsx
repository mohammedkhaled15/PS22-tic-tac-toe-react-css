import { createContext, useState } from "react";

const ModalContext = createContext()

const ModalState = (props) => {
    const [mode, setMode] = useState("winner") // winner || restart

    const [show, setShow] = useState(false) // show or hide

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <ModalContext.Provider value={{
            show, showModal, hideModal,
            modalMode: mode,
            setModalMode: setMode
        }}>
            {props.children}

        </ModalContext.Provider>
    )
}
export { ModalContext, ModalState }