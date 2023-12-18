import React from "react";

const CategoryContainer = (props) => {
    return (
        <div className="thumbnail-image background-color d-flex align-items-center justify-content-center">
            <div>
                <p className="text-center fw-bold fs-4">{props.categoryName}</p>
            </div>
        </div>
    );
};

export default CategoryContainer;
