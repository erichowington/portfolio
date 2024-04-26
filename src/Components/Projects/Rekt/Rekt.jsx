import React from "react";
import "./Rekt.css";

function Rekt() {
  return (
    <div className="rekt-wrapper">
      <div className="rekt-modal-content">
        <div className="rekt-header-container">
          <div className="rekt-info-logo-container">
            <img
              className="rekt-info-logo"
              src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/logos/LOGO-NEON-PURPLE.png?raw=true"
            />
          </div>

          <div className="rekt-tech-stack-container">
            <img
              className="rekt-mongo-logo"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
              alt="MongoDB Logo"
            />
            <img
              className="rekt-express-logo"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png"
              alt="Express Logo"
            />
            <img
              className="rekt-react-logo"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
              alt="React Logo"
            />
            <img
              className="rekt-node-logo"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
              alt="node-logo"
            />
          </div>
        </div>

        <div className="rekt-info-container">
          <p className="rekt-info">
            <strong>REK'T</strong> is a fullstack web app designed to connect
            gamers through their shared passion for gaming. The website's
            architecture is built on the MERN stack, comprising MongoDB,
            Express, React, and Node.js. This tech combination enables us to
            craft a personalized user experience. Users can interact with each
            other by logging in and reviewing their favorite games. The platform
            features a user panel tailored to each signed-in user, displaying
            their favorite games and those they're interested in playing.
          </p>
          <p className="rekt-info">
            Additionally, any game a user reviews is not only showcased in all
            game reviews but also within their user panel for easy access. This
            feature allows users to edit or delete their reviews and logged
            games conveniently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rekt;
