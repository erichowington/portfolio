import React from 'react'
import { useState, useEffect } from 'react';
import './Hobbyr.css';

function Hobbyr() {
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
  <div className='hobbyr-wrapper'>
          <div className='open-hobbyr' onClick={toggleModal}>
              HOBBYR
          </div>
          {modal && (
              <div className='hobbyr-modal'>
                  <div onClick={toggleModal} className='overlay'></div>
                  <div className='hobbyr-modal-content'>
                      <p>hobbyr INFO</p>
                      <p>hobbyr SCREEN SHOTS</p>
                      <p>hobbyr GIT HUB LINK</p>
                      <div className='close-hobbyr-modal' onClick={toggleModal}>CLOSE</div>
                  </div>
              </div>
          )}
      </div>
)
}

export default Hobbyr