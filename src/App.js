import { Intro } from './components/Intro';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Background } from './components/Background';
import { Nav } from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <Background />
      <div className='main'>
        <Nav />
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
