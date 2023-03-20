import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import CONSTS from '../FilmControl.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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

        <Container>
            <Row><br></br></Row>
            <Row>
                <Col>
                    <Image src={filmData.Poster} alt="Film Poster"></Image>
                </Col>
                <Col>
                    <h3 class="text-start">{filmData.Title}</h3>
                    <h5 class="text-start">({filmData.Year})</h5>
                    <br></br>
                    <p class="text-start">{filmData.Plot}</p>
                    <br></br>
                    <p class="text-start">Rating: {filmData.Rated}</p>
                    <br></br>
                    <p class="text-start">Genre: {filmData.Genre}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default FilmDetails;