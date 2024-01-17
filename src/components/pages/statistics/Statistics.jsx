import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Statistics.module.css';
import TopContainer from '../../elements/topContainer/TopContainer';
import HorizontalGap from '../../elements/topContainer/HorizontalGap';
import LoggedUser from '../../elements/loggedUser/LoggedUser';
import SignInButton from '../../elements/signinButton/SignInButton';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import ChartComponent from "./ChartComponent";
import {Link} from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";

const Statistics = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movies, setMovies] = useState([]); // Zmiana na tablicę filmów
    const [last7DaysData, setLast7DaysData] = useState([]);

    const {token} = useAuth();

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const last7DaysData = JSON.parse(localStorage.getItem("visitData")) || [];
        // console.log('Data read from LocalStorage:', last7DaysData);
        setLast7DaysData(last7DaysData);

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                // console.log(response.data);
                // Sortuj filmy według oceny (rate) od najwyższej do najniższej
                const sortedMovies = response.data.sort((a, b) => b.rate - a.rate);

                const ratedMovies = sortedMovies.filter(movie => movie.rate > 0);

                setMovies(ratedMovies );
            } catch (error) {
                // console.error(error);
                toast.error('Error when loading videos');
            }
        };
        fetchData();
    }, []);

    return (
        <animated.div style={props}>
            <div className={styles.statisticsContainer}>
                {token ? <LoggedUser/> : <SignInButton/>}
                <div className={styles.properWidth}>
                    <TopContainer text={'Statistics'}/>
                </div>
                <div className={styles.titleContainers}>
                    <div className={styles.titleContainer}>
                        <HorizontalGap gap={'Top most rated videos (sorted)'}/>
                        <div className={styles.fullSize}>
                            <div type="1" className={styles.orderedList}>
                                {movies.map((movie, index) => (
                                    <Link className={styles.listElements} key={movie.id} to={`/details/${movie.id}`}>
                                    <span
                                        className={`${styles.listElementOne} ${styles.background}`}>{index + 1}. {movie.title}</span>
                                        <span
                                            className={`${styles.listElementTwo} ${styles.background}`}>{movie.rate}/10</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleContainer}>
                        <HorizontalGap gap={'Home page visitation graph'}/>
                        <div className={styles.fullSize}>
                            <ChartComponent last7DaysData={last7DaysData}/>
                        </div>
                    </div>
                </div>
                <div className={styles.detailsFootnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Statistics;
