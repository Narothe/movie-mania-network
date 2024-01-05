import React from "react";
import SmallerMainLogo from "./SmallerMainLogo";
import styles from "../styles/TopContainer.module.css";

const TopContainer = (props) => {
    const text = props.text;
    return (
        <div className={styles.topContainer}>
            <h3>{text}</h3>
            <SmallerMainLogo/>
        </div>
    );
};

export default TopContainer;
