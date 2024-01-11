import React, {useEffect} from "react";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import CategoryContainer from "./CategoryContainer";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
import { useSpring, animated } from 'react-spring';
import styles from "./Categories.module.css";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
import {useAuth} from "../../utils/AuthContext";

const Categories = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const { token } = useAuth();

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    return (
        <animated.div style={props}>
            <div className={`container ${styles.categoriesContainer}`}>
                {token ? <LoggedUser/> : <SignInButton/>}
                <div className={styles.properWidth}>
                    <TopContainer text="Categories"/>
                </div>
                    <HorizontalGap gap={'All Categories'}/>

                    <div className="d-flex flex-row">
                        <CategoryContainer categoryName={1}/>
                        <CategoryContainer categoryName={2}/>
                        <CategoryContainer categoryName={3}/>
                    </div>
                    <Footnote/>
                </div>
        </animated.div>
);
}

export default Categories;
