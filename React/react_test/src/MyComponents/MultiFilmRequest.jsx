import { useState, useEffect } from 'react';
import axios from 'axios';

// http://www.omdbapi.com/ key = 165c745e

const MultiFilmReq = () => {
    const [results, setResults] = useState([]);
    const [filmTitle, setFilmTitle] = useState("");

    const updateTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + "165c745e" + "&s=" + filmTitle + "&type=movie" + "&page=1")
            .then(response => {
                console.log(response.data);
                setResults(response.data);
            });
    };

    return (
        <>
            <div>
                <h2>Show your film</h2>
                <p>Enter the name of the film you are searching for here</p>
                <input type="text" onChange={(e) => updateTitle(e)} />
                <button onClick={(e) => makeRequest(e)}>Search</button>

                {/* {results.map((result) => (
                    <div>
                        <h4>{result.Title}</h4>
                        <h4>{result.Year}</h4>
                        <h4>{result.Rated}</h4>
                        <h4>{result.Genre}</h4>
                        <h4>{result.Plot}</h4>
                        <img src={result.Poster} alt="The poster"></img>
                    </div>
                ))} */}

            </div>
        </>
    );
}

export default MultiFilmReq; 