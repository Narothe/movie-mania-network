import React, {useEffect} from "react";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import CategoryContainer from "../elements/CategoryContainer";
import HorizontalGap from "../elements/horizontalGap";
import { useSpring, animated } from 'react-spring';
import styles from "../styles/Categories.module.css";

const Categories = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    return (
        <animated.div style={props}>

            <div className={`container ${styles.categoriesContainer}`}>
                <TopContainer text="Categories"/>
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
