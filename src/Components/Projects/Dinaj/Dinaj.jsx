import React from "react";
import "./Dinaj.css";

function Dinaj() {
  return (
    <div className="Dinaj-wrapper">
      <div className="dinaj-modal-content">
        <div className="dinaj-info-logo-container">
          <img
            className="dinaj-info-logo"
            src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/Header_TRNSPRNT.png?raw=true"
            alt="illustration of a man sitting on a rock thinking to him self 'Do I Need a Jacket?'"
          />
        </div>

        <div className="dinaj-tech-stack-container">
          <img
            className="react-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
            alt="React Logo"
          />
          <img
            className="js-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
            alt="JavaScript Logo"
          />
        </div>
        <p className="contributions">
          <strong>Contributions:</strong> Full production.
        </p>

        <div className="dinaj-info-container">
          <p className="dinaj-info">
            <p className="dinaj-p-1">
              <strong>"Do I Need a Jacket?"</strong> serves as my response to
              the typical weather application. Whenever I check the day's
              forecast, the ubiquitous question arises: 'Do I need a jacket?'
              But it's not just about whether a jacket is needed; it's also
              about what type is suitable.
            </p>
            <p className="dinaj-p-2">
              Through geolocation services, the app pinpoints the user's
              location. Alternatively, users can manually input their city.
              Leveraging the OpenWeatherAPI, we swiftly determine whether a
              jacket is necessary based on the current weather conditions. Next,
              we cross-reference this data with REI's recommended jacket guide
              to advise users on the appropriate jacket type.
            </p>
            <p className="dinaj-p-3">
              Users can simply click on the suggested answer to view a sample of
              the recommended jacket. Moreover, the app generates a
              comprehensive weather report and presents jacket suggestions
              across various types and price ranges, ensuring options for every
              user."
            </p>
          </p>
        </div>
        <span className="app-view">APP VIEW</span>
        <div className="dinaj-screenshots">
          <div className="dinaj-ui-container">
            <div className="landing-wrapper">
              <img
                className="dinaj-landing"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-home.png"
                alt="App landing page"
              />
            </div>
          </div>

          <div className="dinaj-ui-container-2">
            <div className="answer-wrapper">
              <img
                className="dinaj-answer"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-answer.png"
                alt="answer for what type of jacket based on the users location"
              />
            </div>
            <div className="example-wrapper">
              <img
                className="dinaj-example"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-example.png"
                alt="An image of jacket, with the description of the jacket."
              />
            </div>
            <div className="report-wrapper">
              <img
                className="dinaj-report"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-report.png"
                alt="an example of a full weather report"
              />
            </div>
          </div>
          <span className="desktop-view">DESKTOP VIEW</span>
          <div className="desktop-dinaj-container">
            <div className="desktop-landing-wrapper">
              <img
                className="dinaj-desktop-landing"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-desktop.png"
                alt="desktop landing page"
              />
            </div>
            <div className="desktop-recs-wrapper">
              <img
                className="desktop-recs"
                src="https://raw.githubusercontent.com/erichowington/portfolio/8e67318ef77239ec55c688c0cd47618821dd1f7e/public/Images/dinaj-ui/dinaj-ui-recs.png"
                alt="a list of jacket reccomendations"
              />
            </div>
          </div>
          <div className="ui-info-dinaj">
            <p className="dinaj-ui-info-1">
              The main focus when creating "Do I Need a Jacket"...
            </p>
            <li className="reason-1">Ease of use.</li>
            <li className="reason-2">Practical and fun.</li>
            <li className="reason-3">Reactive design</li>
            <p className="dinaj-ui-closing">
              When developing this app, my primary goal was to showcase my
              proficiency in React by emphasizing object-oriented programming
              principles through component-based architecture and the use of
              modals to render data conditionally. I aimed to convey the joy and
              accessibility of coding. By addressing everyday queries through
              practical applications, I sought to demystify coding and
              illustrate its relevance to daily life.
            </p>
          </div>
          <div className="dinaj-design">
            <p className="design-statement">
              {" "}
              Additionally, I leveraged my skills in Adobe Illustrator and
              Photoshop to personalize the app further, creating original
              graphics and logos, as well as typefaces for the modals. Examples
              below:
            </p>
            <div className="jacket-container">
              <img
                className="jacket-dinaj"
                src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/DINAJ-HEAVY.png?raw=true"
                alt="image of a heavy jacket with text that reads'HEAVY' along with a description of a heavy jacket"
              />
              <img
                className="jacket-dinaj"
                src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/DINAJ-LIGHT.png?raw=true"
                alt="image of a light jacket with text that reads 'LIGHT' along with a description of a light jacket"
              />
              <img
                className="jacket-dinaj"
                src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/DINAJ-MEDIUM.png?raw=true"
                alt="image of a medium jacket with text that reads 'MEDIUM' along with a description of a medium jacket"
              />
              <img
                className="jacket-dinaj"
                src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/DINAJ-NONE.png?raw=true"
                alt="image of Arnold Schwarzenegger flexing his biceps shirtless with texts that reads 'NO JACKET'"
              />
            </div>
          </div>
        </div>
        <div className="dinaj-links">
          <div className="git-hub-container">
            <a
              href="https://github.com/erichowington/DoINeedAJacket"
              target="_blank"
            >
              <img
                className="dinaj-github"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                alt="github logo"
              />
            </a>
          </div>
          <div className="website-container">
            <a href="https://dinaj.netlify.app/" target="_blank">
              <img
                className="dinaj-website"
                src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/world-globe-line-icon.png"
                alt="image of a globe"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dinaj;
