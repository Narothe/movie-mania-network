import React from "react";
import SmallerMainLogo from "../smallerMainLogo/SmallerMainLogo";
import styles from "./TopContainer.module.css";

const TopContainer = (props) => {
    const text = props.text;
    return (
        <div className={styles.topContainer}>
            <div className={styles.textStyle}>
                {text}
            </div>
            <SmallerMainLogo/>
        </div>
    );
};

export default TopContainer;
