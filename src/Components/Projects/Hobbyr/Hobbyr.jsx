import React from "react";
import { useState, useEffect } from "react";
import "./Hobbyr.css";

function Hobbyr() {
  const [hobbyrModal, setHobbyrModal] = useState(false);

  const toggleHobbyrModal = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setHobbyrModal(!hobbyrModal);
  };

  useEffect(() => {
    if (hobbyrModal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [hobbyrModal]);

  return (
    <div className="hobbyr-wrapper">
      <div className="hobbyr-logo-container">
        <img
          className="open-hobbyr"
          onClick={toggleHobbyrModal}
          src="https://github.com/erichowington/hobbyr/blob/dev/public/images/hobbyr-logos/hobbyr-logo-orange.png?raw=true"
        />
      </div>
      {hobbyrModal && (
        <div className="hobbyr-modal">
          <div onClick={toggleHobbyrModal} className="overlay"></div>
          <div className="hobbyr-modal-content">
            <p>hobbyr INFO</p>
            <p>hobbyr SCREEN SHOTS</p>
            <p>hobbyr GIT HUB LINK</p>
            <div className="close-hobbyr-modal" onClick={toggleHobbyrModal}>
              CLOSE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hobbyr;
