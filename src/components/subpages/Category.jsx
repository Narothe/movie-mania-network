import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import HorizontalGap from "../elements/horizontalGap";
import Movies from "../elements/Movies";
import styles from "../styles/Category.module.css";
import { useSpring, animated } from 'react-spring';

const Category = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    const {categoryName} = useParams();

    return (
        <animated.div style={props}>

            <div className={`container ${styles.categoryContainer}`}>
                <TopContainer text={'Category'}/>
                <HorizontalGap gap={`Category ${categoryName}`}/>
                <Movies category={categoryName}/>

                <Footnote/>
            </div>
        </animated.div>
    );
}

export default Category;
