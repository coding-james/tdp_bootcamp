import { useState, useEffect } from 'react';
import axios from 'axios';

// http://www.omdbapi.com/ key = 165c745e

const MultiFilmReq = () => {
    const [filmData, setFilmData] = useState([]);
    const [filmTitle, setFilmTitle] = useState("");

    const updateTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + "165c745e" + "&s=" + filmTitle + "&type=movie" + "&page=1")
            .then(response => {
                console.log(response.data);
                setFilmData(response.data);
            });
    };

    return (
        <>
            <div>
                <h2>Show your film</h2>
                <p>Enter the name of the film you are searching for here</p>
                <input type="text" onChange={(e) => updateTitle(e)} />
                <button onClick={(e) => makeRequest(e)}>Search</button>

                {/* {filmData.map((filmData) => (
                    <div>
                        <h4>{filmData.Title}</h4>
                        <h4>{filmData.Year}</h4>
                        <h4>{filmData.Rated}</h4>
                        <h4>{filmData.Genre}</h4>
                        <h4>{filmData.Plot}</h4>
                        <img src={filmData.Poster} alt="The poster"></img>
                    </div>
                ))} */}

            </div>
        </>
    );
}

export default MultiFilmReq; 