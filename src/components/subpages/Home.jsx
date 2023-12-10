import React from "react";

import Footnote from "../elements/Footnote";
import SignIn from "../elements/SignIn";
import MainLogo from "../elements/MainLogo";
import Movies from "../elements/Movies";

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
