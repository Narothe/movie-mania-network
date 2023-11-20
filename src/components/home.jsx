import React from "react";
import fullLogo from "./assets/logos/full_logo.png";
import {Link } from "react-router-dom";

import thumbnailImage1 from "./assets/movie_window_view/climate.jpg";


const Home = () => {
    return (
        <div className="container">
            <nav className="d-flex justify-content-center home-nav">
                {/*<button className="btn btn-color position-absolute start-100 btn-size-home" type="submit"> Sign_in </button>*/}
                <Link to="/login" className="btn btn-color position-absolute start-100 btn-size-home"> Sign in </Link>

                <Link to="/home">
                    <img className="img-position" src={fullLogo} alt="full logo"/>
                </Link>
            </nav>

            <div>
                <div className="position-relative">
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                    <img className="thumbnail-image" src={thumbnailImage1} alt="thumbnail"/>
                </div>
            </div>
            <footer className="d-flex justify-content-center">
                <p className="footer-style">The website was created for a project called "Reactive Programming II." The
                    author of the website is XYYYYYZZZZZ. All photographs on the site are used from free sources or were
                    created by the author.</p>
            </footer>
        </div>
    );
}

export default Home;
