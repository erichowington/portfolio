


// import React from 'react';

// function ProjectInfoModal({ isOpen, onClose, projectComponent }) {
//     if (!isOpen || !projectComponent) return null;
  
//     return (
//       <div className='project-info-modal'>
//         <div className='project-info-modal-content'>
//           <span className='project-info-close' onClick={onClose}></span>
//           {projectComponent}
//           <div onClick={onClose} className='info-overlay'></div>
//         </div>
//       </div>
//     );
//   }

// export default ProjectInfoModal;

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
                <span className='project-info-close' onClick={onClose}></span>
                {projectComponent}
                <div onClick={onClose} className='info-overlay'></div>
            </div>
        </div>
    );
}

export default ProjectInfoModal;
