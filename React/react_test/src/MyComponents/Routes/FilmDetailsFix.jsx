import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import CONSTS from '../FilmControl.json'

function FilmDetails() {
    const params = useParams();
    console.log("Param:", params);
    const [filmData, setFilmData] = useState("");

    useEffect(() => {
        const GetFilm = () => {
            axios.get("http://www.omdbapi.com/?apikey=" + CONSTS.API_KEY + "&i=" + params.imdbID)
                .then(response => {
                    console.log(response.data);
                    setFilmData(response.data);
                });
        }
        GetFilm();
    },[params]);

    return (
        <>
            <h3>{filmData.Title} - ({filmData.Year})</h3>
            <p>{filmData.Plot}</p>
            <p>Rating: {filmData.Rated}</p>
            <p>Genre: {filmData.Genre}</p>
            <img src={filmData.Poster} alt="Film Poster"></img>
        </>
    )
}

export default FilmDetails;