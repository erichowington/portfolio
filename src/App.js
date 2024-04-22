import logo from './logo.svg';
import './App.css';
import ProjectModal from './Components/ProjectModal.jsx';

function App() {

  function handleClick(){
    console.log("click")
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Eric Howington</h1>
        <h2>Developer and Designer</h2>
      </div>
      <ProjectModal handleClick={handleClick}/>
    </div>
  );
}

export default App;
