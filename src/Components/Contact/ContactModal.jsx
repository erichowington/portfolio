import React from "react";
import { useState, useEffect } from "react";
import "./ContactModal.css";

function ContactModal() {
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
    <div className="contact-wrapper">
      <div className="open-contact-modal" onClick={toggleModal}>
        Contact
      </div>
      {modal && (
        <div className="contact-modal">
          <div onClick={toggleModal} className="contact-overlay"></div>
          <div className="contact-modal-content">
            <div className="contact-container">
              <div className="contact-header-container">
                <div className="contact-header">CONTACT</div>
                <button onClick={toggleModal}className="close-contact-modal">X</button>
              </div>
              <div className="contact-info-container">
                <p className="contact-info-header">
                  Lets connect, shoot me an email directly at <strong> ehowington94@gmail.com</strong> or via social media.
                </p>
              </div>

              <div className="socials">
              <div className="socials-container">
                <a href="https://github.com/erichowington" target="_blank">
                  <img
                    className="personal-github"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/erichowington/" target="_blank">
                  <img
                    className="linkedin"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.png"
                  />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactModal;
