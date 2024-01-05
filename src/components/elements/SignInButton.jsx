import React from "react";
import {Link} from "react-router-dom";
import styles from "../styles/SignInButton.module.css";

const SignInButton = () => {
    return (
        <Link to="/signin" className={`btn ${styles.btnColor} position-absolute start-100 ${styles.btnSizeHome}`}> Sign in </Link>
    );
};

export default SignInButton;
