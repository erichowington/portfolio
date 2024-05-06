import React from 'react';
import './ProjectInfoModal.css'

function ProjectInfoModal({ isOpen, onClose, projectComponent }) {
    if (!isOpen || !projectComponent) return null;

    const stopPropagation = (event) => {
        event.stopPropagation();
    };
  
    return (
        <div className='project-info-modal' onClick={onClose}>
            <div className='project-info-modal-content' onClick={stopPropagation}>
                <span className='project-info-close' onClick={onClose}> X</span>
                {projectComponent}
                <div onClick={onClose} className='info-overlay'></div>
            </div>
        </div>
    );
}

export default ProjectInfoModal;
