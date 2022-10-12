// import logo from './logo.svg';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Aperture_Science.svg/240px-Aperture_Science.svg.png" className="App-logo" alt="logo" />
//         <p>Welcome to Aperture Science Laboratories</p>

//         <a
//           className="App-link"
//           href="https://en.wikipedia.org/wiki/Locations_of_Half-Life#Aperture_Science_Laboratories"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aperture Science Laboratories
//         </a>
//       </header>
//     </div> 
//   );
// };

// export default App;

const aboutMe = () => {

  const details = {
    address1: "Aperture Science Laboratories",
    name: "GLaDOS",
    state: "Michigan",
    country: "United States"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Aperture_Science.svg/240px-Aperture_Science.svg.png" className="App-logo" alt="logo" />
        <p>Welcome to <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Locations_of_Half-Life#Aperture_Science_Laboratories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aperture Science Laboratories
          </a></p>

        <div>
          <h2>{details.name}</h2>
          <h4>{details.address1}</h4>
          <h4>{details.state}</h4>
          <h4>{details.country}</h4>
        </div>
      </header>
    </div>
  )
}

export default aboutMe;