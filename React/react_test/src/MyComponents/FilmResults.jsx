import { Link, useParams } from "react-router-dom";

function FilmResults({ imdbID, title, poster, year }) {

    return (
        <>
            <h3>
                {`${title} (${year})`}
            </h3>
            <img src={poster} alt="Film Poster" />
            <Link to={`/film/${imdbID}`}><button>More Details</button></Link>
        </>
    )
}

export default FilmResults;