import React from "react";
import fullLogo from "./assets/logos/full_logo.png";
import {Link, useNavigate } from "react-router-dom";

import thumbnailImage from "./assets/movie_window_view/climate.jpg";


const Home = () => {
    const data = { key: "asd" }; // Dane do przekazania
    const navigate = useNavigate();

    const handleClick = () => {
        const dataParam = encodeURIComponent(JSON.stringify(data));
        navigate(`/show_movie?data=${dataParam}`);
    };

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
                {/*<Link to="/show_movie">*/}
                {/*    <div className="position-relative">*/}
                {/*        <img className="thumbnail-image" src={thumbnailImage} alt="thumbnail" />*/}
                {/*        <p className="thumbnail-text">Movie Title</p>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                <button onClick={handleClick}>Go to Page</button>
            </div>
            <footer className="d-flex justify-content-center">
                <p className="footer-style">The website was created for a project called "Reactive Programming II." The author of the website is XYYYYYZZZZZ. All photographs on the site are used from free sources or were created by the author.</p>
            </footer>
        </div>
    );
}

export default Home;
