import React from "react";
import {Link} from "react-router-dom";

const CategoryContainer = (props) => {
    return (
        <Link className="thumbnail-image background-color d-flex align-items-center justify-content-center text-decoration-none" to="/category">
            <div>
                <p className="text-center fw-bold fs-4 category-container-text-color">{props.categoryName}</p>
            </div>
        </Link>
    );
};

export default CategoryContainer;
