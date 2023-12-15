import React from "react";
import {Link} from "react-router-dom";

const SignInButton = () => {
    return (
        <Link to="/signin" className="btn btn-color position-absolute start-100 btn-size-home"> Sign in </Link>
    );
};

export default SignInButton;
