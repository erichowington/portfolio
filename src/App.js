// import ProjectsModal from './Components/Projects/ProjectsModal.jsx';
// import ContactModal from './Components/Contact/ContactModal.jsx';
// import AboutModal from './Components/About/AboutModal.jsx';
// import {useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal);
//     };

//     useEffect(() => {
//         if (modal) {
//             document.body.classList.add('active-modal');
//         } else {
//             document.body.classList.remove('active-modal');
//         }
//     }, [modal]);

 

//   return (
//     <div className="app-wrapper">
//       <div className='header-container'>
//         <div className='header-name'>Eric Howington</div>
//         <div className='header-title'>Developer and Designer</div>
//       </div>
//       <div className='section-container'>
//         <ProjectsModal toggleModal={toggleModal}/>
//         <AboutModal />
//         <ContactModal/>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import ProjectsModal from './Components/Projects/ProjectsModal.jsx';
import ContactModal from './Components/Contact/ContactModal.jsx';
import AboutModal from './Components/About/AboutModal.jsx';
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <div className='header-container'>
        <div className='header-name'>Eric Howington</div>
        <div className='header-title'>Developer and Designer</div>
      </div>
      <div className='section-container'>
        <ProjectsModal />
        <AboutModal />
        <ContactModal />
      </div>
    </div>
  );
}

export default App;

