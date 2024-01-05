import React from "react";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import CategoryContainer from "../elements/CategoryContainer";
import HorizontalGap from "../elements/horizontalGap";
import styles from "../styles/Categories.module.css";

const Categories = () => {
    return (
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

    );
}

export default Categories;
