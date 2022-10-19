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
import OMDB from './MyComponents/TrainersSolutions/OMDB'; //Trainer Solution
import SearchList from './MyComponents/LiftingState/SearchList';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import Home from './MyComponents/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
          <nav>
            <Link to="/home" className='App-link'>Home</Link>
            <Link to="/about" className='App-link'>About Me</Link>
            <Link to="/mycomp" className='App-link'>Props</Link>
            <Link to="/PropComp" className='App-link'>Prop Component</Link>
            <Link to="/Counter" className='App-link'>Counter</Link>
            <Link to="/content" className='App-link'>Employees v1</Link>
            <Link to="/SubContent" className='App-link'>Employees v2</Link>
            <Link to="/LoginControl" className='App-link'>Login Control</Link>
            <Link to="/Game" className='App-link'>Game</Link>
            <Link to="/EmployeeInfo" className='App-link'>Employees</Link>
            <Link to="/FilmReq" className='App-link'>Film</Link>
            <Link to="/MultiFilmReq" className='App-link'>Search Film</Link>
            <Link to="/SearchList" className='App-link'>SearchList</Link>
            <Link to="/Robots" className='App-link'>Robots</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/mycomp" element={<MyComponent />} />
          <Route path="/PropComp" element={<PropComp />} />
          <Route path="/Counter" element={<CounterFix />} />
          <Route path="/SubContent" element={<SubContent />} />
          <Route path="/LoginControl" element={<LoginControl />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/EmployeeInfo" element={<EmployeeInfo />} />
          <Route path="/FilmReq" element={<FilmReq />} />
          <Route path="/MultiFilmReq" element={<MultiFilmReq />} />
          <Route path="/SearchList" element={<SearchList />} />
          <Route path="/Robots" element={<Robots />} />

        </Routes>
      </Router>

      {/* {
          robot.map(robots => {
            // console.log("Robot:", robots);
            return <Robots key={robots.id + robots.name} name={robots.name} address={robots.address} state={robots.state} country={robots.country} />;
          })
        } */}

    </div >
  );
};

export default App;