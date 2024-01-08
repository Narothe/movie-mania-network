import React from "react";
import fullLogo from "../../assets/logos/full_logo.png";
import {Link} from "react-router-dom";
import styles from "./SmallerMainLogo.module.css";

const SmallerMainLogo = () => {
    return (
        <Link to="/">
            <img className={styles.imgSize} src={fullLogo} alt="full logo"/>
        </Link>
    );
};

export default SmallerMainLogo;
