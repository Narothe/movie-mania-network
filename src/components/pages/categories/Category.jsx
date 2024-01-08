import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import Footnote from "../../elements/footnote/Footnote";
import TopContainer from "../../elements/topContainer/TopContainer";
import HorizontalGap from "../../elements/HorizontalGap";
import Movies from "../../elements/Movies";
import styles from "./Category.module.css";
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
