import React from "react";
import { useState, useEffect } from "react";
import dogImage from "../../Luke.jpeg";
import "./AboutModal.css";

function AboutModal() {
  const [modal, setModal] = useState(false);
  const [showDogImage, setShowDogImage] = useState(false); // Add state for showing the dog image

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleDogImage = () => {
    setShowDogImage(!showDogImage);
  };

  useEffect(() => {
    if (modal || showDogImage) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal, showDogImage]);

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
                As a creatively inclined software engineer with a passion for
                building interpersonal connections, I've followed a diverse
                career path. Starting as an entry-level sales associate, I
                advanced to manage a flagship store before transitioning to the
                service industry. Upon entering the service industry my vision
                was quickly recognized by the Michelin Guide, where my
                contributions led me into a technical management and creative
                direction role. Now, I'm eager to combine my diverse
                experiences, tenacity for learning, and expertise in full-stack
                development to solve technical challenges for clients while
                fostering meaningful relationships.
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

              <div className="skill skill-vscode">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png"
                  alt="VS Code logo"
                />
                <p className="skill-name">Visual Studio Code</p>
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
              <div className="skill skill-PostreSQL">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png"
                  alt="PostgreSQL Logo"
                />
                <p className="skill-name">PostgreSQL</p>
              </div>
            </div>
            <div className="skills-container">
              <div className="skill skill-MongoDB">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
                  alt="MongoDB Logo"
                />
                <p className="skill-name">MongoDB</p>
              </div>

              <div className="skill skill-NodeJS">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
                  alt="NodeJS Logo"
                />
                <p className="skill-name">NodeJS</p>
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
              <div className="skill skill-photoshop">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.png"
                  alt="PhotoShop Logo"
                />
                <p className="skill-name">Adobe Photoshop</p>
              </div>
              <div className="skill skill-illustrator">
                <img
                  className="skill-icon"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-illustrator-icon.png"
                  alt="VS Code logo"
                />
                <p className="skill-name">Adobe Illustrator</p>
              </div>
            </div>
            <p className="soft-skills-header">SOFT SKILLS</p>
            <div className="soft-skills-container">
              <li className="soft-skills">
                Craft the vision and guide the business or product strategy,
                ensuring solutions are recurring and simple.
              </li>
              <li className="soft-skills">
                Effective and transparent communication.
              </li>
              <li className="soft-skills">
                Lead empathetically to successfully align teams on missions or
                solutions.
              </li>
              <li className="soft-skills">
                Keep the customer as the foremost priority, prioritizing their
                needs over personal opinions.
              </li>
              <li className="soft-skills">
                Adapt quickly to change and effortlessly devise solutions as
                challenges arise.
              </li>
            </div>
            <div className="about-closing-container">
              {showDogImage && (
                <img className="Luke" src={dogImage} alt="Dog" />
              )}
              <p className="about-closing-statment">
                When I'm not at the computer-- I'm usually hanging with my{" "}
                <span className="dog-word" onClick={toggleDogImage}>
                  dog
                </span>
                , building something, curating a{" "}
                <a
                  className="spotify-link"
                  href="https://open.spotify.com/playlist/1zHTZF8zxF4V2Vof9ML5u0?si=30f29d2a726f4835"
                  target="_blank"
                >
                  playlist
                </a>
                , excercising, or at the grocery store.
              </p>
              <p className="about-closing-statment-2">
                This website was wireframed in{" "}
                <span className="build">Whimsical</span> and coded in{" "}
                <span className="build">Visual Studio Code</span> by yours
                truly. Built with <span className="build">React</span> and,
                deployed with
                <span className="build">Netlify</span>. All text is set in the{" "}
                <span className="build">IBM Plex Sans typeface</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutModal;
