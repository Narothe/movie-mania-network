import React, {useEffect, useState} from "react";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import CategoryContainer from "./CategoryContainer";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
import { useSpring, animated } from 'react-spring';
import styles from "./Categories.module.css";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import {useAuth} from "../../utils/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const Categories = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [movies, setMovies] = useState([]);
    const {token} = useAuth();

    useEffect(() => {
        document.title = 'Movie Mania Network';

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                setMovies(response.data);
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

    // Grupowanie kategorii
    const groupedCategories = movies.reduce((acc, movie) => {
        const categoryName = movie.genre;

        if (acc[categoryName]) {
            acc[categoryName].count += 1;
        } else {
            acc[categoryName] = {
                categoryName,
                count: 1,
            };
        }

        return acc;
    }, {});

    const uniqueCategories = Object.values(groupedCategories);

    return (
        <animated.div style={props}>
            <div className={`container ${styles.categoriesContainer}`}>
                {token ? <LoggedUser/> : <SignInButton/>}
                <div className={styles.properWidth}>
                    <TopContainer text="Categories"/>
                </div>
                <HorizontalGap gap={'All Categories'}/>

                <div className={`d-flex flex-wrap justify-content-between ${styles.categoriesRow}`}>
                    {uniqueCategories.map((category) => (
                        // Sprawdź, czy categoryName nie jest puste
                        category.categoryName && (
                            <CategoryContainer
                                categoryName={category.categoryName}
                                key={category.categoryName}
                                count={category.count}
                            />
                        )
                    ))}
                </div>
                <Footnote/>
            </div>
        </animated.div>
    );
};
export default Categories;
