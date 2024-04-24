// import React, { useState } from "react";
// import Rekt from "./Rekt/Rekt.jsx";
// import Hobbyr from "./Hobbyr/Hobbyr.jsx";
// import Dinaj from "./Dinaj/Dinaj.jsx";
// import "./ProjectsModal.css";
// import ProjectInfoModal from "./ProjectInfoModal.jsx";

// function ProjectsModal() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   const handleOverlayClick = () => {
//     if (isModalOpen) {
//       handleCloseModal();
//     }
//   };

//   const handleButtonClick = (projectComponent) => {
//     setSelectedProject(projectComponent);
//   };

//   return (
//     <div className="projects-wrapper">
//       <div className="projects-open-modal" onClick={handleOpenModal}>
//         Projects
//       </div>
//       {isModalOpen && (
//         <>
//           <div className="projects-overlay" onClick={handleOverlayClick}></div>
//           <div className="projects-modal">
//             <div className="projects-modal-content">
//               <div className="rekt-logo-container">
//                 <img
//                   className="open-rekt"
//                   onClick={() => handleButtonClick(Rekt)}
//                   src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/SQUARE-LOGO.png?raw=true"
//                   alt="Rekt Logo"
//                 />
//               </div>

//               <div className="hobbyr-logo-container">
//                 <img
//                   className="open-hobbyr"
//                   onClick={() => handleButtonClick(Hobbyr)}
//                   src="https://github.com/erichowington/hobbyr/blob/dev/public/images/hobbyr-logos/hobbyr-logo-orange.png?raw=true"
//                 />
//               </div>

//               <div className="dinaj-logo-container">
//                 <img
//                   className="open-dinaj"
//                   onClick={() => handleButtonClick(Dinaj)}
//                   src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/Header_TRNSPRNT.png?raw=true"
//                 />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//       <ProjectInfoModal
//         isOpen={!!selectedProject}
//         onClose={handleCloseModal}
//         projectComponent={selectedProject}
//       />
//     </div>
//   );
// }

// export default ProjectsModal;

import React, { useState, useEffect } from "react";
import Rekt from "./Rekt/Rekt.jsx";
import Hobbyr from "./Hobbyr/Hobbyr.jsx";
import Dinaj from "./Dinaj/Dinaj.jsx";
import "./ProjectsModal.css";
import ProjectInfoModal from "./ProjectInfoModal.jsx";

function ProjectsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalContentMounted, setModalContentMounted] = useState(false);

  useEffect(() => {
    setModalContentMounted(true);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleOverlayClick = () => {
    if (isModalOpen) {
      handleCloseModal();
    }
  };

  const handleButtonClick = (projectComponent) => {
    setSelectedProject(projectComponent);
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-open-modal" onClick={handleOpenModal}>
        Projects
      </div>
      {isModalOpen && modalContentMounted && (
        <>
          <div className="projects-overlay" onClick={handleOverlayClick}></div>
          <div className="projects-modal">
            <div className="projects-modal-content animate-in">
              <div className="rekt-logo-container">
                <img
                  className="open-rekt"
                  onClick={() => handleButtonClick(Rekt)}
                  src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/SQUARE-LOGO.png?raw=true"
                  alt="Rekt Logo"
                />
              </div>

              <div className="hobbyr-logo-container">
                <img
                  className="open-hobbyr"
                  onClick={() => handleButtonClick(Hobbyr)}
                  src="https://github.com/erichowington/hobbyr/blob/dev/public/images/hobbyr-logos/hobbyr-logo-orange.png?raw=true"
                />
              </div>

              <div className="dinaj-logo-container">
                <img
                  className="open-dinaj"
                  onClick={() => handleButtonClick(Dinaj)}
                  src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/Header_TRNSPRNT.png?raw=true"
                />
              </div>
            </div>
          </div>
        </>
      )}
      <ProjectInfoModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        projectComponent={selectedProject}
      />
    </div>
  );
}

export default ProjectsModal
