import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Project } from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Project/>
    </div>
  );
}

export default App;
