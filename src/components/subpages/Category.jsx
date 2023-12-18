import React from "react";
import { useParams } from "react-router-dom";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";
import HorizontalGap from "../elements/horizontalGap";
import Movies from "../elements/Movies";

const Category = () => {
    const { categoryName } = useParams();

    return (
        <div className="container category-container">
            <TopContainer text={'Category'}/>
            <HorizontalGap gap={`Category ${categoryName}`}/>
            <Movies category={categoryName}/>

            <Footnote/>
        </div>

    );
}

export default Category;
