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
            />
          </div>
        
        <div className="tech-stack-container">
          <img
            className="react-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
          />
          <img
            className="js-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
          />
          <img
            className="django-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png"
          />
          <img
            className="python-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
          />
        </div>

        <div className="hobbyr-info-container">
          <p className="hobbyr-info">
            Hobbyr is a social media app with the focus of creating a digital
            space where creators can share their hobbies. In our current
            landscape of social media apps, the idea of posting content that
            fits ones brand can feel overwhelming. Wether you're an influencer,
            a streamer, or even a comedian; Hobbyr allows users to interact and
            share their passions, without the hassle of worrying about
            engagement or if their hobbies align with their online persona.
          </p>
        </div>
        <p>Hobbyr GIT HUB LINK</p>
      </div>
    </div>
  );
}

export default Hobbyr;
