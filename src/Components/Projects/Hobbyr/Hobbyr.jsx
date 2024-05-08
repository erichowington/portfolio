import React from "react";
import "./Hobbyr.css";

function Hobbyr() {


  return (
    <div className="hobbyr-wrapper">
      <div className="hobbyr-modal-content">
        
          <div className="hobbyr-info-logo-container">
            <img
              className="hobbyr-info-logo"
              src="https://github.com/erichowington/hobbyr/blob/dev/public/images/hobbyr-logos/hobbyr-logo-orange.png?raw=true"
              alt="orange logo that reads 'hobbyr'"
            />
          </div>
        
        <div className="tech-stack-container">
          <img
            className="react-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
            alt="react logo"
          />
          <img
            className="js-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
            alt="JavaScript Logo"
          />
          <img
            className="django-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
            alt="Django Logo"
          />
          <img
            className="python-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
            alt="Python Logo"
          />
        </div>
        <p className="contributions"><strong>Contributions:</strong> Project Manager, Front End, Back End, UX, UI</p>


        <div className="hobbyr-info-container">
          <p className="hobbyr-info">
            <strong>Hobbyr</strong> is a full stack web app with the focus of creating a digital
            space where creators can share their hobbies. In our current
            landscape of social media apps, the idea of posting content that
            fits ones brand can feel overwhelming. Wether you're an influencer,
            a streamer, or even a comedian; Hobbyr allows users to interact and
            share their passions, without the hassle of worrying about
            engagement or if their hobbies align with their online persona.
          </p>
        </div>
        <div className="hobbyr-screenshots">
          <div className="hobbyr-ui-container">
              <div className="login-wrapper">
                <img 
                  className="hobbyr-login" 
                  src="https://raw.githubusercontent.com/erichowington/portfolio/f9baf8da820a53edfd6349c173c003bec6f745cd/public/Images/hobbyr-ui/hobbyr-LogIn.png"
                  alt="log in page for hobbyr"
                  />
              </div>
              <div className="browse-wrapper">
                <img 
                  className="hobbyr-browse" 
                  src="https://raw.githubusercontent.com/erichowington/portfolio/f9baf8da820a53edfd6349c173c003bec6f745cd/public/Images/hobbyr-ui/hobbyr-browse.png"
                  alt="brose page for hobbyr"
                  />
              </div>
              <div className="create-wrapper">
                <img 
                  className="hobbyr-create" 
                  src="https://raw.githubusercontent.com/erichowington/portfolio/f9baf8da820a53edfd6349c173c003bec6f745cd/public/Images/hobbyr-ui/hobbyr-create.png"
                  alt="page for user to create and post a project"
                  />
              </div>
              <div className="details-wrapper">
                <img 
                  className="hobbyr-details" 
                  src="https://raw.githubusercontent.com/erichowington/portfolio/f9baf8da820a53edfd6349c173c003bec6f745cd/public/Images/hobbyr-ui/hobbyr-project.png"
                  alt="a page that shows the details of the selected project∏"
                  />
              </div>
              <div className="comment-wrapper">
                <img className="hobbyr-comment" src="https://raw.githubusercontent.com/erichowington/portfolio/f9baf8da820a53edfd6349c173c003bec6f745cd/public/Images/hobbyr-ui/hobbyr-comment.png"/>
              </div>
          </div>
        </div>
        <div className="hobbyr-ui-info-container">
          <div className="hobbyr-ui-info">
            <p className="ui-info">I spearheaded this project with a few basic principles in mind...</p>
              <li className="ui-info-2">Clean UX interface.</li>
              <li className="ui-info-3">Familiar UI experience.</li>
              <li className="ui-info-4">Fully robust backend.</li>
              <li className="ui-info-5">Comprehensible wire-framing.</li>
            <p className="ui-info-statment">Implementing these principles simplified the workload on the frontend, 
            ensured a seamless and easy user journey, 
            and empowered my teammates to work on their respective duties with clear and concise information.</p>
            <p className="ui-info-closing">I crafted the logo using Adobe Illustrator and drew inspiration from Brutalist Web Design to inform the UX.</p>
          </div>


        </div>

        <div className="git-hub-container">
          <a href="https://github.com/erichowington/hobbyr" target="_blank"><img className="hobbyr-github" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a>
        </div>
      </div>
    </div>
  );
}

export default Hobbyr;
