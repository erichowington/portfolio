import React from 'react';
import { useState, useEffect } from 'react';
import './ProjectsModal.css';
import Rekt from './Rekt/Rekt.jsx';
import Hobbyr from './Hobbyr/Hobbyr.jsx';
import Dinaj from './Dinaj/Dinaj.jsx';


function ProjectsModal() {
    const [projectModal, setProjectModal] = useState(false);

    const toggleProjectModal = () => {
        setProjectModal(!projectModal);
    };

    useEffect(() => {
        if (projectModal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [projectModal]);

    return (
        <div className='projects-wrapper'>
            <div className='open-projects-modal' onClick={toggleProjectModal}>
                Projects
            </div>
            {projectModal && (
                <div className='projects-modal'>
                    <div onClick={toggleProjectModal} className='overlay'></div>
                    <div className='projects-modal-content'>
                        <Dinaj />
                        <Hobbyr />
                        <Rekt />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsModal;




