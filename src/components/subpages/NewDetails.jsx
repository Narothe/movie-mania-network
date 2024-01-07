import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/NewDetails.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useSpring, animated } from 'react-spring';
import TopContainer from "../elements/TopContainer";
import noThumbnailImage from "../assets/noThumbnail/noThumbnailPattern.png";

const NewDetails = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movie, setMovie] = useState({});

    const {id} = useParams();
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

    return (
        <animated.div style={props}>
            <div className={styles.addContainer}>
                <TopContainer text={'Details'}/>
                <h2>Title: "<i>{movie.title}</i>"</h2>
                <div className={styles.itemsContainer}>
                    <img className={styles.mainImage} src={movie.image} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = noThumbnailImage;
                    }} alt={`thumbnail ${movie.id}`}/>
                    <div className={styles.contentPlace}>
                        <p>{movie.content}</p>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default NewDetails;
