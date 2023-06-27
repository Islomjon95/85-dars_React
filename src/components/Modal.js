import style from  "./css/modal.module.css"
import React from 'react'
import  ReactDOM from "react-dom"

function Modal({ children, closeModal}) {
    
  return ReactDOM.createPortal((
    <div className={style.modal__back}>
        <div className={style.modal}>
                {children}
            <button className={style.btn}  onClick={closeModal}>Close</button>
        </div>
        
    </div>), document.body)
  
}

export default Modal



