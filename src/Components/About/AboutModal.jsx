import React from "react";
import { useState, useEffect } from "react";
import "./AboutModal.css";

function AboutModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  return (
    <div className="about-wrapper">
      <div className="open-about-modal" onClick={toggleModal}>
        About
      </div>
      {modal && (
        <div className="about-modal">
          <div onClick={toggleModal} className="about-overlay"></div>
          <div className="about-modal-content">
            <div className="about-title">ABOUT</div>
            <div className="about-portrait-wrapper"></div>
            <div class="image-container">
                <img
                className="skill-icon-react"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
                />
              <div class="image-overlay">
                <p>REACT</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutModal;
