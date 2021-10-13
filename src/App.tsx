import logo from './logo.svg';
import './App.css';
import MainPageHeader from './components/MainPageHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <MainPageHeader/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
