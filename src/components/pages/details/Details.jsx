import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./Details.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useSpring, animated } from 'react-spring';
import TopContainer from "../../elements/topContainer/TopContainer";
import noThumbnailImage from "../../assets/noThumbnail/noThumbnailPattern.png";
import getRatingImage from "../../utils/RatingHelper";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";
import githubLogo from "../../assets/logos/githubLogo.png";

const Details = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movie, setMovie] = useState({});
    const { token } = useAuth();
    const navigate = useNavigate();  // Zaktualizowany hook

    const { id } = useParams();
    // console.log("Movie ID:", id);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://at.usermd.net/api/movies/${id}`);
            // console.log(response.data);
            setMovie(response.data);
        } catch (error) {
            // console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        toast.promise(
            fetchData(),
            {
                loading: 'Loading movie details...',
                success: 'Movie details loaded successfully',
                error: 'Error when loading movie details',
            },
            {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            }
        ).then(() => {
            scrollToTop();
        });
    }, [id]);

    const clampedRate = Math.min(10, Math.max(0, movie.rate));

    const ratingImage = getRatingImage(clampedRate);


    const handleDeleteMovie = async () => {
        try {
            await axios.delete(`https://at.usermd.net/api/movie/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Movie deleted successfully", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
            navigate('/');
        } catch (error) {
            // console.error(error);
            if (error.response) {
                // console.error('Response data:', error.response.data);
            }
            toast.error("Error deleting movie", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
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
                            <div>
                                <p className={styles.marginThem}>Rate: {clampedRate || 0}/10</p>
                                <p className={styles.marginThem}>Production
                                    year: {movie.productionYear !== 0 ? movie.productionYear : 'Unknown'}</p>
                                <p className={styles.marginThem}>Genre: {movie.genre}</p>
                            </div>
                            <div className={styles.marginThat}>
                                {ratingImage && <img className={styles.ratingImage} src={ratingImage}
                                                     alt={`rating ${movie.rate}`}/>}
                            </div>
                        </div>

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
                <Link to={"https://github.com/Narothe/movie-mania-network"} className={styles.githubLogo}>
                    <img src={githubLogo} alt="githubLogo" className={styles.githubLogoW}/>
                </Link>
                <div className={styles.detailsFootnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Details;
