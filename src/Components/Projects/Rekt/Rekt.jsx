import React from 'react'
import { useState, useEffect } from 'react'
import './Rekt.css'

function Rekt() {
  const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal]);

  return (
    <div className='rekt-wrapper'>
            <div className='open-rekt' onClick={toggleModal}>
                REKT
            </div>
            {modal && (
                <div className='rekt-modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='rekt-modal-content'>
                        <p>REKT INFO</p>
                        <p>REKT SCREEN SHOTS</p>
                        <p>REKT GIT HUB LINK</p>
                        <div className='close-rekt-modal' onClick={toggleModal}>CLOSE</div>
                    </div>
                </div>
            )}
        </div>
  )
}

export default Rekt