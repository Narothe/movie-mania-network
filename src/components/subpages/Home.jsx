import React from "react";

import Footnote from "../elements/Footnote";
import SignInButton from "../elements/SignInButton";
import MainLogo from "../elements/MainLogo";
import Movies from "../elements/Movies";
import styles from "../styles/Home.module.css";

const Home = () => {

    return (
        <div className="container">
            <nav className={`d-flex justify-content-center ${styles.homeNav}`}>
                <SignInButton/>
                <MainLogo/>
            </nav>
            <div>
                <Movies category={1}/>
                <Movies category={2}/>
                <Movies category={3}/>
                <Movies category={4}/>
                <Movies category={5}/>
            </div>

            <Footnote/>
        </div>
    );
};

export default Home;
