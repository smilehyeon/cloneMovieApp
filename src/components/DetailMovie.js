/* eslint-disable */

import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({ id, coverImg, title, summary, genres, rating, runtime, bg, year, url }) {
    return (
        <section className={styles.container} style={{ backgroundImage: `url(${bg})`, backgroundSize: `cover` }}>

            <div className={styles.card}>
                <img src={coverImg} alt={title} className={styles.movie__img}/>


                <div className={styles.movieInfo}>
                    <h2>
                        {title}
                    </h2>
                    <ul>
                        {genres.map((g) => (<li key={g}>{g}</li>))}
                    </ul>

                    <div className={styles.info}>
                        <p className={styles.detail_year}>{year}년</p>
                        <p className={styles.detail_rating}>RATING : {rating}</p>
                        <p className={styles.detail_runtime}>RUNTIME : {runtime}min</p>


                    </div>
                    <div className={styles.info2}>
                    <p className={styles.summary}>{summary.length === 0 ? <span>No Summary...</span> : summary}</p>
                    {url === null ? <span></span> : <a href={url}>torrent download</a>}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailMovie; 