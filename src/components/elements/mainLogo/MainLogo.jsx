import React from "react";
import fullLogo from "../../assets/logos/full_logo.png";
import {Link} from "react-router-dom";
import styles from "./MainLogo.module.css";

const MainLogo = () => {
    return (
        <Link to="/">
            <img className={styles.imgPosition} src={fullLogo} alt="full logo"/>
        </Link>
    );
};

export default MainLogo;
