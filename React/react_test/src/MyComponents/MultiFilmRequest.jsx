import { useState } from 'react';
import axios from 'axios';
import FilmResults from './FilmResults';
import CONSTS from './FilmControl.json'

// http://www.omdbapi.com/

const MultiFilmReq = () => {
    const [results, setResults] = useState([]);
    const [filmTitle, setFilmTitle] = useState("");;

    const updateTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + CONSTS.API_KEY + "&s=" + filmTitle + "&type=movie" + "&page=1")
            .then(response => {
                console.log(response.data.Search);
                setResults(response.data.Search);
            });
    };

    return (
        <>
            <div>
                <h2>Search Films</h2>
                <p>Enter the name of the film you are searching for here</p>
                <input type="text" onChange={(e) => updateTitle(e)} />
                <button onClick={(e) => makeRequest(e)}>Search</button>

                {
                    results.map(result => (
                        <FilmResults
                            key={result.imdbID}
                            poster={result.Poster}
                            title={result.Title}
                            year={result.Year}
                            imdbID = {result.imdbID}
                        />
                    ))
                }

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