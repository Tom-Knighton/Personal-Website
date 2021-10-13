import logo from './logo.svg';
import './App.css';
import MainPageHeader from './components/MainPageHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import FunStuff from './components/FunStuff';

function App() {
  return (
    <div className="App">
      <MainPageHeader/>
      <AboutMe/>
      <Projects/>
      <FunStuff/>
    </div>
  );
}

export default App;
