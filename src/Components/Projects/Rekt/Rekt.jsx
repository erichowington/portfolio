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
        <div className="rekt-screenshots">
          <div className="landing-wrapper">
            <img
              className="rekt-landing"
              src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-LandingPage.png?raw=true"
              alt="REKT Landing Page"
            />
          </div>
          <div className="rekt-ui-container">
            <div className="rekt-browse-wrapper">
              <img
                className="REKT-browse"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-BROWSE.png?raw=true"
                alt="REKT Browse Screen"
              />
            </div>
            <div className="rekt-details-wrapper">
              <img
                className="rekt-details"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-DETAIL.png?raw=true"
                alt="Rekt Game Details Screen"
              />
            </div>
            <div className="reviews-wrapper">
              <img
                className="rekt-reviews"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-REVIEW.png?raw=true"
                alt="Game reviews"
              />
            </div>
            <div className="add-review-wrapper">
              <img
                className="add-review"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-ADD-REVIEW.png?raw=true"
                alt="Add game review"
              />
            </div>
            <div className="my-review-wrapper">
              <img
                className="my-review"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-MY-REVIEW.png?raw=true"
                alt="My reviews page"
              />
            </div>
            <div className="my-favs-wrapper">
              <img
                className="my-favs"
                src="https://github.com/erichowington/portfolio/blob/main/public/Images/REKT-ui/REKT-MY-FAVS.png?raw=true"
                alt="My favorites page"
              />
            </div>
          </div>
        </div>
        <div className="rekt-info">
          <p className="rekt-info-body">
            This app was a collaborative effort in which I took the lead on
            conceptualizing and wireframing the idea. Inspired by Letterboxd,
            our aim was to create a similar platform tailored specifically for
            gamers. My role involved orchestrating the project, from planning
            the initial stages to overseeing its execution. Adopting a strategic
            "zoom-in" approach, I meticulously outlined a timeline, prioritizing
            tasks based on their level of complexity and significance.
            Delegating responsibilities to a team of developers, we focused
            initially on crucial elements such as user validation and seeding
            game data. As progress unfolded, we shifted focus towards
            implementing essential features like review functionality, ensuring
            a comprehensive CRUD (Create, Read, Update, Delete) system to
            achieve Minimum Viable Product (MVP) status swiftly. With the
            foundation in place, we expanded our scope to include additional
            functionalities such as game favoriting, a filterable search bar,
            and an expansive landing page, designed to captivate users from the
            moment they arrive.
          </p>
          <p className="rekt-goals">
            The main focus when executing the production of{" "}
            <strong>REK'T</strong>...
          </p>
          <li className="goal-1">Efficient Task Prioritization</li>
          <li className="goal-2">Sleek Frontend Development</li>
          <li className="goal-3">Comprehensive Feature Rollout</li>
          <li className="goal-4">Robust Component Design</li>
          <p className="rekt-info-body-2">
            Beyond project management, I took an active role in front-end
            development, employing React to translate our ideas into interactive
            components. Guided by object-oriented programming principles, I
            sculpted a frontend architecture focused on clarity and efficiency.
            This involved meticulously organizing files and crafting components
            as conduits for smooth data flow, ensuring both a polished user
            experience and streamlined codebase readability
          </p>
        </div>
        <div className="ux-header">UX</div>
        <div className="rekt-ui-info">
          <p>
            I crafted logos and icons, drawing inspiration from the iconic
            visuals of Blade Runner and the nostalgic allure of vintage neon
            video games. By seamlessly blending nostalgia with futuristic
            elements, my aim was to create a fun and familiar, yet understated
            user experience.
          </p>
        </div>
        <div className="rekt-icons-container">
            <img
            className="heart-icon"
            src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Icons/HEART-ICON.png?raw=true"
            alt="Heart icon"
            />
            <img
            className="plus-icon"
            src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Icons/PLUS-ICON.png?raw=true"
            alt="plus icon"
            />
            <img 
            className="star-icon"
            src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Icons/STAR-ICON.png?raw=true"
            alt="star icon"
            />

        </div>
      </div>
    </div>
  );
}

export default Rekt;
