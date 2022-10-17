function FilmResults({ title, poster, year }) {
    return (
        <>
            <h3>
                {`${title} (${year})`}
            </h3>
            <img src={poster} alt="Film Poster" />
        </>
    )
}

export default FilmResults;