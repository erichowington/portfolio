import React from "react";
import DoINeedAJacket from "./DoINeedAJacket.jsx";
import Hobbyr from "./Hobbyr.jsx";
import Rekt from "./Rekt.jsx";
import { useState } from "react";
import './ProjectModal.css'

function ProjectModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="projects-wrapper">
      <div onClick={toggleModal}>Projects</div>

      {modal && (
        <div className="project-container">
          <div className="projects">
            <DoINeedAJacket />
            <Hobbyr />
            <Rekt />
          </div>
          <button onClick={toggleModal}>close</button>
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
