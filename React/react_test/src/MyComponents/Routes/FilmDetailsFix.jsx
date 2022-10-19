import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

function FilmDetails() {
    const params = useParams();
    console.log("Param:", params);
    const aKey = "165c745e";
    const [filmData, setFilmData] = useState("");

    useEffect(() => {
        const GetFilm = () => {
            axios.get("http://www.omdbapi.com/?apikey=" + aKey + "&i=" + params.imdbID)
                .then(response => {
                    console.log(response.data);
                    setFilmData(response.data);
                });
        }
        GetFilm();
    },[params]);

    return (
        <>
            <p>Test</p>
            <h3>{filmData.Title} - ({filmData.Year})</h3>
            <p>{filmData.Plot}</p>
            <p>Rating: {filmData.Rated}</p>
            <p>Genre: {filmData.Genre}</p>
            <img src={filmData.Poster} alt="Film Poster"></img>
        </>
    )
}

export default FilmDetails;