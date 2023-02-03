import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("ROMANCE");
    const [rating, setRating] = useState(8);
    const getMovies = async (value, category) => {
        const response = await
            fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating='+ value +'&sort_by=year&genre=' + category
            );
        const json = await response.json();
        console.log(json.data.movies);
        setMovies(json.data.movies);
        setLoading(false);
    }

    function getMovieRating(e){
        setRating(e.target.value);
        getMovies(e.target.value, genre);
    }

    function getMovieGenre(e){
        setGenre(e.target.value);
        getMovies(rating, e.target.value);
    }

    useEffect(() => {
        getMovies(rating, genre);
    }, [rating, genre]);

    return (
        <div className={styles.container}>
            <h1>{genre} MOVIE</h1>

                <div className={styles.genre}>
                    <select onChange={getMovieGenre}>
                        <option value="ROMANCE">romance</option>
                        <option value="HORROR">horror</option>
                        <option value="COMEDY">comedy</option>
                        <option value="ACTION">action</option>
                        <option value="DRAMA">drama</option>
                    </select>
                </div>
                <div className={styles.rating}>The movies above <input type="number" min="0" max="10" defaultValue="8" onChange={getMovieRating} /> rating</div>
            
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;