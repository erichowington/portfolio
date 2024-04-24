// import React from 'react';
// import { useState, useEffect } from 'react';
// import './ProjectsModal.css';
// import Rekt from './Rekt/Rekt.jsx';
// import Hobbyr from './Hobbyr/Hobbyr.jsx';
// import Dinaj from './Dinaj/Dinaj.jsx';


// function ProjectsModal() {
//     const [projectModal, setProjectModal] = useState(false);

//     const toggleProjectModal = () => {
//         setProjectModal(!projectModal);
//     };

//     useEffect(() => {
//         if (projectModal) {
//             document.body.classList.add('active-modal');
//         } else {
//             document.body.classList.remove('active-modal');
//         }
//     }, [projectModal]);

//     return (
//         <div className='projects-wrapper'>
//             <div className='open-projects-modal' onClick={toggleProjectModal}>
//                 Projects
//             </div>
//             {projectModal && (
//                 <div className='projects-modal'>
//                     <div onClick={toggleProjectModal} className='project-overlay'></div>
//                     <div className='projects-modal-content'>
//                         <Dinaj toggleProjectModal={projectModal} />
//                         <Hobbyr onClick={toggleProjectModal}/>
//                         <Rekt onClick={toggleProjectModal} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProjectsModal;



// import React, { useState, useEffect } from 'react';
// import Rekt from './Rekt/Rekt.jsx';
// import Hobbyr from './Hobbyr/Hobbyr.jsx';
// import Dinaj from './Dinaj/Dinaj.jsx';

// function ProjectsModal() {
//     const [projectModal, setProjectModal] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     const toggleProjectModal = () => {
//         setProjectModal(!projectModal);
//     };

//     const handleButtonClick = (projectComponent) => {
//         setSelectedProject(projectComponent);
//     };

//     const handleCloseModal = () => {
//         setSelectedProject(null);
//         setProjectModal(false); // Close the modal when project is selected
//     };

//     useEffect(() => {
//         if (projectModal) {
//             document.body.classList.add('active-modal');
//         } else {
//             document.body.classList.remove('active-modal');
//         }
//     }, [projectModal]);

//     return (
//         <div className='projects-wrapper'>
//             <div className='open-projects-modal' onClick={toggleProjectModal}>
//                 Projects
//             </div>
//             {projectModal && (
//                 <div className='projects-modal'>
//                     <div onClick={toggleProjectModal} className='project-overlay'></div>
//                     <div className='projects-modal-content'>
//                         <button onClick={() => handleButtonClick(Rekt)}>Rekt</button>
//                         <button onClick={() => handleButtonClick(Hobbyr)}>Hobbyr</button>
//                         <button onClick={() => handleButtonClick(Dinaj)}>Dinaj</button>
//                     </div>
//                 </div>
//             )}
//             {selectedProject && (
//                 <div className='modal'>
//                     <div className='modal-content'>
//                         <span className='close' onClick={handleCloseModal}>&times;</span>
//                         <selectedProject onClose={handleCloseModal} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProjectsModal;




import React, { useState } from 'react';
import Rekt from './Rekt/Rekt.jsx';
import Hobbyr from './Hobbyr/Hobbyr.jsx';
import Dinaj from './Dinaj/Dinaj.jsx';
import './ProjectsModal.css';
import ProjectInfoModal from './ProjectInfoModal.jsx';


function ProjectsModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null); // Reset selected project when modal is closed
    };

    const handleButtonClick = (projectComponent) => {
        console.log("Selected project:", projectComponent);
        setSelectedProject(projectComponent);
    };

    return (
        <div className='projects-wrapper'>
            <div className='projects-open-modal' onClick={handleOpenModal}>
                Projects
            </div>
            <ProjectInfoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                projectComponent={selectedProject}
            />
            {isModalOpen && (
                <div className='projects-modal'>
                    <div className='projects-modal-content'>
                        <button onClick={() => handleButtonClick(Rekt)}>Rekt</button>
                        <button onClick={() => handleButtonClick(Hobbyr)}>Hobbyr</button>
                        <button onClick={() => handleButtonClick(Dinaj)}>Dinaj</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsModal;



