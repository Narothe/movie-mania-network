import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryContainer.module.css";

const CategoryContainer = (props) => {
    return (
        <Link
            className={`${styles.thumbnailImage} ${styles.backgroundColor} d-flex align-items-center justify-content-center text-decoration-none`}
            to={`/category/${props.categoryName}`}
        >
            <div>
                <p className={`text-center fw-bold fs-4 ${styles.categoryContainerTextColor}`}>{props.categoryName}</p>
            </div>
        </Link>
    );
};

export default CategoryContainer;
