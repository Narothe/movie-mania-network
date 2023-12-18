import React from "react";
import Footnote from "../elements/Footnote";
import TopContainer from "../elements/TopContainer";

const Categories = () => {
    return (
        <div className="container categories-container">
            <TopContainer text="Categories" />
            <h4>All Categories</h4>
            <hr />

            <div className="thumbnail-image background-color d-flex align-items-center justify-content-center">
                <div>
                    <p className="text-center fw-bold fs-4">Category 1</p>
                </div>
            </div>

            <Footnote />
        </div>

    );
}

export default Categories;
