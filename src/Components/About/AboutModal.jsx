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
            <p className="about-title">ABOUT</p>
            <div className="about-header-container">
              <p className="about-header-body">
                I'm Eric. A developer, designer, and a problem solver.
              </p>
              <div className="about-portrait-wrapper">
                <img
                  className="about-portrait"
                  src="https://raw.githubusercontent.com/erichowington/portfolio/ced61a3ab473d0600f45facf7a076a8317e69f6f/public/Images/about-portrait.png"
                  alt="Portrait"
                />
              </div>
            </div>
            <div className="about-body-container">
              <p className="about-statment">
                I am a creatively inclined software engineer with a knack for
                interpersonal relationships. Throughout my career I worked my
                way up from an entry level sales associate, to managing the
                flagship store. I transitioned into the service industry where
                my vision was recognized by the Michelin Guide. I want to bring
                my tenacity for learning and my love of working with people to
                solve technical problems for clients as a way to leverage my
                full stack development skills while building and maintaining
                meaningful relationships.
              </p>
              <p className="about-statment-2">
                In my personal life, I've always endeavored to learn as much as
                possible every day. Whether it's screen printing, building
                furniture, graphic design, or now software engineering, I've
                pursued various skills with zeal. A quote by{" "}
                <strong>Ram Dass</strong> often comes to mind when I contemplate
                my approach to life:
                <p className="ram-quote">
                  "Do you do it like it's a big weight on you?
                  <br />
                  or do you do it like it's all a part of the dance?"
                </p>
              </p>
              <p className="about-statment-3">
                This mantra has been a constant guide for me, resonating deeply
                because it emphasizes that our mindset towards challenges shapes
                our experiences. I firmly believe that how we tackle one thing
                reflects how we handle everything, and I'm convinced that
                daunting tasks can be approached with ease when viewed as part
                of life's intricate dance. The wealth of information available
                in the world is truly infinite, so I urge everyone to embrace
                the opportunity to learn and start dancing
              </p>
            </div>

            <p className="skills-header">SKILLS</p>
            <div className="skills-container">
              <div className="skill skill-react">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
                  alt="React Icon"
                />
                <p className="skill-name">React</p>
              </div>

              <div className="skill skill-javascript">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
                  alt="JavaScript Logo"
                />
                <p className="skill-name">JavaScript</p>
              </div>

              <div className="skill skill-python">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
                  alt="Python Logo"
                />
                <p className="skill-name">Python</p>
              </div>

              <div className="skill skill-django">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
                  alt="Django Logo"
                />
                <p className="skill-name">Django</p>
              </div>

              <div className="skill skill-MongoDB">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
                  alt="MongoDB Logo"
                />
                <p className="skill-name">MongoDB</p>
              </div>
              <div className="skill skill-CSS">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/css3-icon.png"
                  alt="CSS Logo"
                />
                <p className="skill-name">CSS</p>
              </div>
              <div className="skill skill-Jira">
                <img
                  className="skill-icon"
                  src="https://cdn.worldvectorlogo.com/logos/jira-1.svg"
                  alt="Jira Logo"
                />
                <p className="skill-name">JIRA</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutModal;
