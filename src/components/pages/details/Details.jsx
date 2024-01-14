import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useSpring, animated } from 'react-spring';
import TopContainer from "../../elements/topContainer/TopContainer";
import noThumbnailImage from "../../assets/noThumbnail/noThumbnailPattern.png";
import getRatingImage from "../../elements/RatingHelper";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movie, setMovie] = useState({});
    const { token } = useAuth();
    const navigate = useNavigate();  // Zaktualizowany hook

    const { id } = useParams();
    console.log("Movie ID:", id);

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies/${id}`);
                console.log(response.data);
                setMovie(response.data);
            } catch (error) {
                console.error(error);
                toast.error("Error when loading videos");
            }
        };
        fetchData();
    }, [id]);

    const ratingImage = getRatingImage(movie.rate);

    const handleDeleteMovie = async () => {
        try {
            await axios.delete(`https://at.usermd.net/api/movie/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Movie deleted successfully");
            // Przekieruj użytkownika na inną stronę po usunięciu filmu (np. listę filmów)
            navigate('/movies'); // Zaktualizowana funkcja do przekierowania do listy filmów
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            toast.error("Error deleting movie");
        }
    };

    return (
        <animated.div style={props}>
            <div className={styles.addContainer}>
                {token ? <LoggedUser/> : <SignInButton/>}
                <TopContainer text={'Details'}/>
                <div className={`d-flex justify-content-between ${styles.marginBottom}`}>
                    <h2>Title: "<i>{movie.title}</i>"</h2>
                    <div className={styles.displayColumn}>
                        <div className={`d-flex align-items-center flex-row mb-3`}>
                            <p>Rate: {movie.rate}/10</p>
                            <div className={styles.marginThat}>
                                {ratingImage && <img className={styles.ratingImage} src={ratingImage} alt={`rating ${movie.rate}`}/>}
                            </div>
                        </div>
                        <p>Genre: {movie.genre}</p>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.mainImage} src={movie.image} onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = noThumbnailImage;
                        }} alt={`thumbnail ${movie.id}`}/>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.contentPlace}>
                            <p>{movie.content}</p>
                        </div>
                        {token && (
                            <button onClick={handleDeleteMovie} className={`btn ${styles.btnCol}`}>
                                Delete Movie
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Details;