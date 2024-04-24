import React from "react";
import { useState, useEffect } from "react";
import "./Rekt.css";

function Rekt({toggleModal}) {
  const [rektModal, setRektModal] = useState(false);

  const toggleRekt = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setRektModal(!rektModal);
    
  };
  

  useEffect(() => {
    if (rektModal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [rektModal]);

  return (
    <div className="rekt-wrapper">
      <div className="rekt-logo-container">
        <img
          className="open-rekt"
          onClick={toggleRekt}
          src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/SQUARE-LOGO.png?raw=true"
          alt="Rekt Logo"
        />
      </div>

      {rektModal && (
        <div className="rekt-modal">
          <div onClick={toggleRekt} className="overlay"></div>
          <div className="rekt-modal-content">
            <p>REKT INFO</p>
            <p>REKT SCREEN SHOTS</p>
            <p>REKT GIT HUB LINK</p>
            <div className="close-rekt-modal" onClick={toggleRekt}>
              CLOSE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rekt;


