import React from 'react';
import { useState, useEffect } from 'react';
import './ProjectsModal.css';
import Rekt from './Rekt/Rekt.jsx';
import Hobbyr from './Hobbyr/Hobbyr.jsx';
import Dinaj from './Dinaj/Dinaj.jsx';


function ProjectsModal() {
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
        <div className='projects-wrapper'>
            <div className='open-modal' onClick={toggleModal}>
                Projects
            </div>
            {modal && (
                <div className='projects-modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='projects-modal-content'>
                        <Dinaj toggleModal={toggleModal}/>
                        <Hobbyr toggleModal={toggleModal}/>
                        <Rekt toggleModal={toggleModal}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsModal;