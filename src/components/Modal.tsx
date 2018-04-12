import * as React from 'react'

interface ModalProps {
  open: boolean
  closeModal: () => void
  children?: React.ReactNode
}
const Modal = (props: ModalProps): JSX.Element => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        background: 'rgba(0, 0, 0, 0.75)',
        zIndex: props.open ? 5 : -5,
        opacity: props.open ? 1 : 0,
        transition: 'all 0.3s ease-in'
      }}
      onClick={props.closeModal}
    >
      {props.children}
    </div>
  )
}

export default Modal