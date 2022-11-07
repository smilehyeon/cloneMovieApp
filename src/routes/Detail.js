/* eslint-disable */

import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import DatailMovie from "../components/DetailMovie";


function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovies(json.data.movie);
        setLoading(false);
    }, [id])
    useEffect(() => {
        getMovie();
    }, [getMovie]);





    return (
        <div>
            {loading ? (<span>Loading...</span>) :
                (
                    <div>
                        {
                            (
                                <DatailMovie
                                    id={movies.id}
                                    coverImg={movies.medium_cover_image}
                                    title={movies.title}
                                    summary={movies.description_full}
                                    genres={movies.genres}
                                    rating={movies.rating}
                                    runtime={movies.runtime}
                                    bg={movies.background_image_original}
                                    year={movies.year}
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