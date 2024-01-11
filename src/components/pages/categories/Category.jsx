import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
// import Movies from "../../elements/Movies";
import styles from "./Category.module.css";
import { useSpring, animated } from 'react-spring';
import {useAuth} from "../../utils/AuthContext";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";

const Category = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const { token } = useAuth();

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    const {categoryName} = useParams();

    return (
        <animated.div style={props}>
            {token ? <LoggedUser/> : <SignInButton/>}
            <div className={`container ${styles.categoryContainer}`}>
                <div className={styles.properWidth}>
                    <TopContainer text={'Category'}/>
                </div>
                    <HorizontalGap gap={`Category ${categoryName}`}/>
                    {/*<Movies category={categoryName}/>*/}

                    <Footnote/>
                </div>
        </animated.div>
);
}

export default Category;
