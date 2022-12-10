import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

function Modal ({ childen, onClose }) {
  return (
    <div className='modal'>
      <div>
        <button className='btn' onClick={onClose}>🅧</button>
        {childen}
      </div>
    </div>
  )
}

export default function ModalPortal ({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('root')
  )
}
