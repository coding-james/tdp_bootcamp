// import logo from './logo.svg';
import './App.css';
import AboutMe from "./MyComponents/SomeApp";
import MyComponent from "./MyComponents/MyComp"
import Header from "./MyComponents/Header"
import PropComp from './MyComponents/Props/PropExample';
import Counter from './MyComponents/States/Counter';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Aperture_Science.svg/240px-Aperture_Science.svg.png" className="App-logo" alt="logo" />
        <p>Welcome to Aperture Science Laboratories</p>

        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Locations_of_Half-Life#Aperture_Science_Laboratories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aperture Science Laboratories
        </a>
        <AboutMe/>
        <MyComponent/>
        <PropComp/>
        <Counter/>
      </header>
    </div> 
  );
};

export default App;