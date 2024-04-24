import React from 'react';

function ProjectInfoModal({ isOpen, onClose, projectComponent }) {
    return (
        <div className={`project-info-modal ${isOpen ? 'active' : ''}`}>
            <div className='project-info-modal-content'>
                <span className='project-info-close' onClick={onClose}></span>
                {projectComponent && projectComponent}
            </div>
        </div>
    );
}

export default ProjectInfoModal;
