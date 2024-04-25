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
          />
        </div>

        <div className="dinaj-tech-stack-container">
          <img
            className="react-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
          />
          <img
            className="js-logo"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
          />
        </div>

        <div className="dinaj-info-container">
          <p className="dinaj-info">
            <p className="dinaj-p-1">
            <strong>"Do I Need a Jacket?"</strong> serves as my response to the typical weather
            application. Whenever I check the day's forecast, the ubiquitous
            question arises: 'Do I need a jacket?' But it's not just about
            whether a jacket is needed; it's also about what type is suitable.
            </p>
            <p className="dinaj-p-2">
            Through geolocation services, the app pinpoints the user's location.
            Alternatively, users can manually input their city. Leveraging the
            OpenWeatherAPI, we swiftly determine whether a jacket is necessary
            based on the current weather conditions. Next, we cross-reference
            this data with REI's recommended jacket guide to advise users on the
            appropriate jacket type. 
            </p>
            <p className="dinaj-p-3">
            Users can simply click on the suggested
            answer to view a sample of the recommended jacket. Moreover, the app
            generates a comprehensive weather report and presents jacket
            suggestions across various types and price ranges, ensuring options
            for every user."
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dinaj;
