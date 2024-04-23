import React from 'react'
import { useState, useEffect } from 'react';
import './ContactModal.css'

function ContactModal() {
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
        <div className='contact-wrapper'>
            <div className='open-contact-modal' onClick={toggleModal}>
                Contact
            </div>
            {modal && (
                <div className='contact-modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='contact-modal-content'>
                      <p>Linkedin</p>
                      <p>github</p>
                      <p>email</p>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactModal