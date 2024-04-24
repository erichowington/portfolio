// import React from "react";
// import { useState, useEffect } from "react";
// import "./Dinaj.css";

// function Dinaj() {
//   const [dinajModal, setDinajModal] = useState(false);

//   const toggleDinajModal = (e) => {
//     e.stopPropagation(); // Prevent event propagation
//     setDinajModal(!dinajModal);
//   };

//   useEffect(() => {
//     if (dinajModal) {
//       document.body.classList.add("active-modal");
//     } else {
//       document.body.classList.remove("active-modal");
//     }
//   }, [dinajModal]);

//   return (
//     <div className="dinaj-wrapper">
//         <div className="dinaj-logo-container">
//             <img
//                 className="open-dinaj"
//                 onClick={toggleDinajModal}
//                 src="https://github.com/erichowington/DoINeedAJacket/blob/main/public/images/Header_TRNSPRNT.png?raw=true"
//             />
//       </div>
//       {dinajModal && (
//         <div className="dinaj-modal">
//           <div onClick={toggleDinajModal} className="overlay"></div>
//           <div className="dinaj-modal-content">
//             <p>dinaj INFO</p>
//             <p>dinaj SCREEN SHOTS</p>
//             <p>dinaj GIT HUB LINK</p>
//             <div className="close-dinaj-modal" onClick={toggleDinajModal}>
//               CLOSE
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dinaj;


import React from "react";
import "./Dinaj.css";

function Dinaj() {
    return (
        <div className="Dinaj-wrapper">
            <div className="dinaj-content">
                <p>Dinaj INFO</p>
                <p>Dinaj SCREEN SHOTS</p>
                <p>Dinaj GIT HUB LINK</p>
            </div>
        </div>
    );
}

export default Dinaj;


