import React from "react";

import Footnote from "../elements/footnote";
import SignIn from "../elements/SignIn";
import MainLogo from "../elements/mainLogo";
import Movies from "../elements/movies";

const Home = () => {

    return (
        <div className="container">
            <nav className="d-flex justify-content-center home-nav">
                <SignIn/>
                <MainLogo/>
            </nav>
            <div>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
            </div>

            <Footnote/>
        </div>
    );
};

export default Home;
