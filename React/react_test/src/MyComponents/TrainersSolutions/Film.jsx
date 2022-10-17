function Film({ title, year, poster }) {
    return (
      <>
        <p>
          {`Title: ${title}`}
        </p>
        <p>
          {`Year: ${year}`}
        </p>
        <img src={poster} alt="A film" />
      </>
    );
  }
  
  export default Film;