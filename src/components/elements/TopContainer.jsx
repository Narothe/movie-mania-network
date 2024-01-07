import React from "react";
import SmallerMainLogo from "./SmallerMainLogo";
import styles from "../styles/TopContainer.module.css";

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
