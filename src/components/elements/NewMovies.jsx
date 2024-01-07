import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NewMovies.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import noThumbnailImage from "../assets/noThumbnail/noThumbnailPattern.png";

const NewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [hoveredMovie, setHoveredMovie] = useState(null);

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

    const handleMouseEnter = (movie) => {
        setHoveredMovie(movie);
    };

    const handleMouseLeave = () => {
        setHoveredMovie(null);
    };

    const renderMoviesRow = (moviesSlice) => {
        return (
            <div className={styles.moviesRow}>
                {moviesSlice.map((movie) => (
                    <div
                        key={movie.id}
                        className={styles.movieItem}
                        onMouseEnter={() => handleMouseEnter(movie)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            to={`/newDetails/${movie.id}`}
                            className={`${styles.thumbnailContainer} ${hoveredMovie === movie && styles.thumbnailContainerHovered}`}
                        >
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
                        {hoveredMovie === movie && (
                            <Link to={`/newDetails/${movie.id}`} className={styles.hoveredInfoBlock}>
                                <h4 className="text-center">{movie.title}</h4>
                                <p>
                                    {movie.content.length > 200
                                        ? `${movie.content.slice(0, 200)}...`
                                        : movie.content}
                                </p>
                            </Link>
                        )}
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

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const chunkSize = Math.ceil(movies.length / 5);
    const rows = chunkArray(movies, chunkSize);

    return (
        <div className={styles.moviesContainer}>
            {rows.map((row, index) => (
                <div key={index}>{renderMoviesRow(row)}</div>
            ))}
        </div>
    );
};

export default NewMovies;
