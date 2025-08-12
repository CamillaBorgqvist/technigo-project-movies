import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMovies = () => {
        setLoading(true);
    
        fetch ("https://api.themoviedb.org/3/movie/popular?api_key=7afbc975bafc0368f78ce24abb37461b&language=en-US&page=1")
        .then (res => res.json())
        .then((json) => {
            setMovies(json.results);
        })
        .catch((error) => {
            setError("Failed to load movies");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect (() => {
        fetchMovies ()
    }, [])

    if (loading) {
        return <p>Loading movies...</p>;
    }

    if (error) {
        return <p>Failed to load movies</p>;
    }

    return(
        <div className="movie-container">
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

                    <div className="hover-details">
                        <h2>{movie.title}</h2>
                        <p> ⭐ {movie.vote_average.toFixed(1) ?? "N/A"}</p>
                        <p>Released {movie.release_date}</p>
                    </div>

                </Link>
            ))}
        </div>
    )  
}

export default MovieList;