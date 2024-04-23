import React from 'react'
import { useState, useEffect } from 'react';
import './Dinaj.css'

function Dinaj() {
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
  <div className='dinaj-wrapper'>
          <div className='open-dinaj' onClick={toggleModal}>
              Do I Need a Jacket??
          </div>
          {modal && (
              <div className='dinaj-modal'>
                  <div onClick={toggleModal} className='overlay'></div>
                  <div className='dinaj-modal-content'>
                      <p>dinaj INFO</p>
                      <p>dinaj SCREEN SHOTS</p>
                      <p>dinaj GIT HUB LINK</p>
                      <div className='close-dinaj-modal' onClick={toggleModal}>CLOSE</div>
                  </div>
              </div>
          )}
      </div>
)
}


export default Dinaj