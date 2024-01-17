import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
import styles from "./Category.module.css";
import { useSpring, animated } from "react-spring";
import { useAuth } from "../../utils/AuthContext";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import axios from "axios";
import toast from "react-hot-toast";

const Category = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [movies, setMovies] = useState([]);
    const { token } = useAuth();
    const { categoryName } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        document.title = "Movie Mania Network";

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                const filteredMovies = response.data.filter(
                    (movie) => movie.genre === categoryName
                );
                setMovies(filteredMovies);
            } catch (error) {
                // console.error(error);
                toast.error("Error when loading videos", {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
                });
            }
        };
        fetchData();
    }, []);

    return (
        <animated.div style={props}>
            {token ? <LoggedUser /> : <SignInButton />}
            <div className={`container ${styles.categoryContainer}`}>
                <div className={styles.properWidth}>
                    <TopContainer text={"Category"} />
                </div>
                <HorizontalGap gap={`Category: ${categoryName}`} />

                <div className={styles.twoContainers}>
                    <div className={styles.firstContainer}>
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <Link
                                    to={`/details/${movie.id}`}
                                    className={styles.textLook}
                                    onMouseEnter={() => setSelectedMovie(movie)}
                                    onMouseLeave={() => setSelectedMovie(null)}
                                    style={{ backgroundImage: `url(${movie.image})` }}
                                >
                                    <div className={styles.helpTitle}>
                                    {movie.title}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={styles.secondContainer}>
                        {selectedMovie && (
                            <img
                                className={styles.movieImage}
                                src={selectedMovie.image}
                                alt={selectedMovie.image}
                            />
                        )}
                    </div>
                </div>
                <Footnote />
            </div>
        </animated.div>
    );
};

export default Category;
