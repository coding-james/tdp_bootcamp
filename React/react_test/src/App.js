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
        {/* <AboutMe/> */}
        {/* <MyComponent/> */}
        {/* <PropComp/> */}
        {/* <CounterFix/> */}

        {
          robot.map(robots => {
            // console.log("Robot:", robots);
            return <Robots key={robots.id + robots.name} name={robots.name} address={robots.address} state={robots.state} country={robots.country} />;
          })
        }

        {/* <Content/> */}
        {/* <SubContent/> */}
        {/* <LoginControl/> */}
        {/* <Game/> */}
        {/* <EmployeeInfo/> */}
        {/* <FilmReq/> */}
        <MultiFilmReq/>
      </header>
    </div>
  );
};

export default App;