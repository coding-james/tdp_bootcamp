import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FilmResults({ imdbID, title, poster, year }) {

    return (
        
        // <>
        //     <h3>
        //         {`${title} (${year})`}
        //     </h3>
        //     <img src={poster} alt="Film Poster" />
        //     <Link to={`/film/${imdbID}`}><button>More Details</button></Link>
        // </>
        
        <Card>
            <Card.Img variant="top" src={poster} alt="Film Poster"/>
            <Card.Body>
                <Card.Title>{`${title} (${year})`}</Card.Title>
                <Link to={`/film/${imdbID}`}><Button variant="primary">More Details</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default FilmResults;