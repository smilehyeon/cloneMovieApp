/* eslint-disable */

import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({ id, coverImg, title, summary, genres, rating, runtime, bg, year }) {
    return (
        <section className={styles.container} style={{ backgroundImage: `url(${bg})`, backgroundSize: `cover` }}>

            <div className={styles.card}>
                <img src={coverImg} alt={title} />


                <div>
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
                    <p className={styles.summary}>{summary}</p>

                </div>
            </div>
        </section>
    );
}

export default DetailMovie; 