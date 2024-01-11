import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './NewStatistics.module.css';
import TopContainer from '../../elements/topContainer/TopContainer';
import HorizontalGap from '../../elements/topContainer/HorizontalGap';
import LoggedUser from '../../elements/loggedUser/LoggedUser';
import SignInButton from '../../elements/signinButton/SignInButton';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const NewStatistics = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movies, setMovies] = useState([]); // Zmiana na tablicę filmów

    const {token} = useAuth();

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                console.log(response.data);
                // Sortuj filmy według oceny (rate) od najwyższej do najniższej
                const sortedMovies = response.data.sort((a, b) => b.rate - a.rate);
                setMovies(sortedMovies);
            } catch (error) {
                console.error(error);
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
                        <ol type="1" className={styles.orderedList}>
                            {movies.map((movie, index) => (
                                <li className={styles.listElements} key={movie.id}>
                                    <span
                                        className={`${styles.listElementOne} ${styles.background}`}>{index + 1}. {movie.title}</span>
                                    <span
                                        className={`${styles.listElementTwo} ${styles.background}`}>{movie.rate}/10</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.titleContainer}>
                        <HorizontalGap gap={'Home page visitation graph'}/>

                        
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default NewStatistics;
