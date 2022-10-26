import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatailMovie from "../components/DetailMovie";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovies(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);





    return (
        <div>
            {loading ? (<span>Loading...</span>) :
                (
                    <div>
                        {
                            (
                                <DatailMovie
                                    id={movies.id}
                                    coverImg={movies.large_cover_image}
                                    title={movies.title}
                                    summary={movies.description_full}
                                    genres={movies.genres}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Detail;