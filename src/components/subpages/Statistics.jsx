import React, { useState, useEffect } from "react";
import moviesData from "../elements/moviesData.json";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import {Link} from "react-router-dom";
// import goodRate from "../assets/symbols/goodRate.png";
// import midRate from "../assets/symbols/midRate.png";
// import badRate from "../assets/symbols/badRate.png";

const Statistics = () => {
    const [sortedMovies, setSortedMovies] = useState([]);

    useEffect(() => {
        // Kopiuj dane filmów, aby nie zmieniać oryginalnej tablicy
        const moviesCopy = [...moviesData];

        // Sortuj filmy według oceny (rate) od najwyższej do najniższej
        moviesCopy.sort((a, b) => b.rate - a.rate);

        // Ustaw posortowane filmy w stanie komponentu
        setSortedMovies(moviesCopy);
    }, []);

    return (
        <div className="statistics-container">
            <TopContainer text={'Statistics'}/>
            <h4>Top most rated videos (sorted)</h4>
            <hr/>

            <div className="statistics-sorted">
                {sortedMovies.map((movie) => (
                    <Link
                        to={`/details/${movie.id}`}
                        key={movie.id}
                        className="statistics-link"
                    >
                        <h5>{movie.title}</h5>
                        <p>{`Rating: ${movie.rate}/10`}</p>
                        <p>{movie.description}</p>
                        <img
                            className="thumbnail-image"
                            src={require(`../assets/movie_window_view/${movie.src}.jpg`)}
                            alt={`thumbnail ${movie.src}`}
                        />
                        {/*{movie.rate >= 8 ? (*/}
                        {/*    <img*/}
                        {/*        className="statistics-thumbnail-image"*/}
                        {/*        src={goodRate}*/}
                        {/*        alt="Good Rate"*/}
                        {/*    />*/}
                        {/*) : movie.rate >= 4 ? (*/}
                        {/*    <img className="statistics-thumbnail-image" src={midRate} alt="Mid Rate" />*/}
                        {/*) : (*/}
                        {/*    <img className="statistics-thumbnail-image" src={badRate} alt="Bad Rate" />*/}
                        {/*)}*/}

                        {/* Dodaj więcej informacji, jeśli to konieczne */}
                    </Link>
                ))}
            </div>
            <div className="details-footnote">
                <Footnote/>
            </div>
        </div>
    );
};

export default Statistics;
