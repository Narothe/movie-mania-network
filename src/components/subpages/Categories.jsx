import React from "react";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import CategoryContainer from "../elements/CategoryContainer";
import HorizontalGap from "../elements/horizontalGap";

const Categories = () => {
    return (
        <div className="container categories-container">
            <TopContainer text="Categories"/>
            <HorizontalGap gap={'All Categories'}/>

            <div className="d-flex flex-row">
                <CategoryContainer categoryName={'Category 1'}/>
                <CategoryContainer categoryName={'Category 2'}/>
                <CategoryContainer categoryName={'Category 3'}/>

            </div>
            <Footnote/>
        </div>

    );
}

export default Categories;
