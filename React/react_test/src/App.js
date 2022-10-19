// import logo from './logo.svg';
import './App.css';
import AboutMe from "./MyComponents/SomeApp";
import MyComponent from "./MyComponents/MyComp"
import Header from "./MyComponents/Header"
import PropComp from './MyComponents/Props/PropExample';
import CounterFix from './MyComponents/States/CounterFix';
import Robots from './MyComponents/Props/RobotProp';
import robot from './MyComponents/Data/robotData.json';
import Content from './MyComponents/Content';
import SubContent from './MyComponents/SubContent';
import Login from './MyComponents/LoginControl';
import LoginControl from './MyComponents/LoginControl';
import Game from './MyComponents/LiftingState/Game';
import EmployeeInfo from './MyComponents/EmployeeInfo';
import FilmReq from './MyComponents/FilmRequest';
import MultiFilmReq from './MyComponents/MultiFilmRequest';
import OMDB from './MyComponents/TrainersSolutions/OMDB';
import SearchList from './MyComponents/LiftingState/SearchList';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <header className="App-header"></header>
        <nav>
          {/* <Link to="/home">Home</Link> */}
          <Link to="/content">Content</Link>
          <Link to="/about">About Me</Link>
          <Link to="/mycomp">My Component</Link>
          <Link to="/PropComp">Prop Component</Link>
        </nav>

        <Routes>
          {/* <Route path="/home" element={ } /> */}
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/mycomp" element={<MyComponent />} />
          <Route path="/PropComp" element={<PropComp />} />
        </Routes>
      </Router>

      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Aperture_Science.svg/240px-Aperture_Science.svg.png" className="App-logo" alt="logo" />
        <p>Welcome to Aperture Science Laboratories</p>

        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Locations_of_Half-Life#Aperture_Science_Laboratories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aperture Science Laboratories
        </a> */}
      {/* <CounterFix/> */}

      {/* {
          robot.map(robots => {
            // console.log("Robot:", robots);
            return <Robots key={robots.id + robots.name} name={robots.name} address={robots.address} state={robots.state} country={robots.country} />;
          })
        } */}


      {/* <SubContent/> */}
      {/* <LoginControl/> */}
      {/* <Game/> */}
      {/* <EmployeeInfo/> */}
      {/* <FilmReq/> */}
      {/* <MultiFilmReq/> */}
      {/* <OMDB/> */}
      <SearchList />
    </div >
  );
};

export default App;