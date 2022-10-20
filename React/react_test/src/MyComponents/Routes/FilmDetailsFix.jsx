import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import CONSTS from '../FilmControl.json'
import Card from 'react-bootstrap/Card';

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
    }, [params]);

    return (
        // <>
        //     <h3>{filmData.Title} - ({filmData.Year})</h3>
        //     <p>{filmData.Plot}</p>
        //     <p>Rating: {filmData.Rated}</p>
        //     <p>Genre: {filmData.Genre}</p>
        //     <img src={filmData.Poster} alt="Film Poster"></img>
        // </>

        <Card>
            <Card.Body style={{ maxWidth: '50%'}}>
                <Card.Img variant="bottom" src={filmData.Poster} alt="Film Poster" style={{ maxWidth: '20%'}}></Card.Img>
                <Card.Title>{filmData.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{filmData.Year}</Card.Subtitle>
                <br></br>
                <Card.Text>
                    {filmData.Plot}
                    <br></br>
                    <br></br>
                    Rating: {filmData.Rated}
                    <br></br>
                    Genre: {filmData.Genre}
                </Card.Text>
            </Card.Body>
        </Card>
        )
}

export default FilmDetails;