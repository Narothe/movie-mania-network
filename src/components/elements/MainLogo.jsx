import React from "react";
import fullLogo from "../assets/logos/full_logo.png";
import {Link} from "react-router-dom";

const MainLogo = () => {
    return (
        <Link to="/">
            <img className="img-position" src={fullLogo} alt="full logo"/>
        </Link>
    );
};

export default MainLogo;
