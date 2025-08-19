import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const MovieDetails = () => {

    const [movie, setMovie] = useState(null)
    const {id} = useParams ()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect (() => {
        const fetchDetails = () => {
            setLoading (true);
        
            fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=7afbc975bafc0368f78ce24abb37461b&language=en-US`)
                .then (res => res.json())
                .then ((json) => {
                    setMovie(json);
                })
                .catch((error) => {
                    setError("Failed to load movie details");
                })
                .finally(() => {
                    setLoading(false);
                });
        }; 
        
        fetchDetails();
    }, [id])
    
    if (loading) {
        return <p>Loading details...</p>;
    }
    if (error) {
        return <p>Failed to load movie details</p>;
    }
    if (!movie) {
        return <p>No movie found</p>;
    }

    return (
      <>
        <div className="background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}> 
            <div className="button-container">
                <Link to="/" className="button-back"> Back to Movie List</Link>
            </div>
            <div className="movie-summary">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="poster-image" />
                <div className="details-text">
                    <h1>{movie.title} <br></br>⭐ {movie.vote_average.toFixed(1) ?? "N/A"}</h1>
                    <p>{movie.overview}</p>
                </div> 
            </div>
        </div>
      </> 
    )
}

export default MovieDetails;