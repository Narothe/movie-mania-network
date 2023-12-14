import React from "react";
import fullLogo from "../assets/logos/full_logo.png";
import {Link} from "react-router-dom";

const SmallerMainLogo = () => {
    return (
        <Link to="/">
            <img className="img-size" src={fullLogo} alt="full logo"/>
        </Link>
    );
};

export default SmallerMainLogo;
