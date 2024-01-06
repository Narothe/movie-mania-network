import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewMovies.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import noThumbnailImage from "../assets/noThumbnail/noThumbnailPattern.png";

const NewMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://at.usermd.net/api/movies");
                console.log(response.data);
                setMovies(response.data);
            } catch (error) {
                console.error(error);
                toast.error("Error when loading videos");
            }
        };

        fetchData();
    }, []);

    const renderMoviesRow = (moviesSlice) => {
        return (
            <div>
                {moviesSlice.map((movie) => (
                    <div key={movie.id} className={styles.movieItem}>
                        <Link to={`/details/${movie.id}`} className={styles.thumbnailContainer}>
                            <img
                                className={styles.thumbnailImage}
                                src={isValidUrl(movie.image) ? movie.image : noThumbnailImage}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = noThumbnailImage;
                                }}
                                alt={`thumbnail ${movie.id}`}
                            />
                        </Link>
                        {/*<div className={styles.movieInfo}>*/}
                        {/*    <h3>{movie.title}</h3>*/}
                        {/*    <p>{movie.content}</p>*/}
                        {/*</div>*/}
                    </div>
                ))}
            </div>
        );
    };

    // Funkcja sprawdzająca, czy podany ciąg znaków jest prawidłowym adresem URL
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <div className={styles.moviesContainer}>
            {movies.reduce((rows, movie, index) => {
                if (index % 7 === 0) {
                    rows.push(renderMoviesRow(movies.slice(index, index + 5)));
                }
                return rows;
            }, [])}
        </div>
    );
};

export default NewMovies;
