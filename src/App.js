import ProjectsModal from './Components/Projects/ProjectsModal.jsx';
import ContactModal from './Components/Contact/ContactModal.jsx';
import AboutModal from './Components/About/AboutModal.jsx';
import './App.css';

function App() {


  return (
    <div className="app-wrapper">
      <div className='header'>
        <h1>Eric Howington</h1>
        <h2>Developer and Designer</h2>
      </div>
      <ProjectsModal/>
      <AboutModal/>
      <ContactModal/>
    </div>
  );
}

export default App;
