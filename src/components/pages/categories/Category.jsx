import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
// import Movies from "../../elements/Movies";
import styles from "./Category.module.css";
import { useSpring, animated } from 'react-spring';
import {useAuth} from "../../utils/AuthContext";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import axios from "axios";
import toast from "react-hot-toast";

const Category = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movies, setMovies] = useState([]);
    const {token} = useAuth();

    const {categoryName} = useParams();

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                const filteredMovies = response.data.filter(movie => movie.genre === categoryName);
                setMovies(filteredMovies);
            } catch (error) {
                console.error(error);
                toast.error("Error when loading videos");
            }
        };
        fetchData();
    }, []);


    return (
        <animated.div style={props}>
            {token ? <LoggedUser/> : <SignInButton/>}
            <div className={`container ${styles.categoryContainer}`}>
                <div className={styles.properWidth}>
                    <TopContainer text={'Category'}/>
                </div>
                <HorizontalGap gap={`Category: ${categoryName}`}/>

                {movies.map((movie) => (
                    <Link className={styles.textPosition} key={movie.id} to={`/details/${movie.id}`}>
                        <p className={styles.textLook}>{movie.title}</p>
                    </Link>
                ))}
                <Footnote/>
            </div>
        </animated.div>
    );
}

export default Category;
