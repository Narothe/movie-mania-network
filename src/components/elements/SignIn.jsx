import React from "react";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <Link to="/login" className="btn btn-color position-absolute start-100 btn-size-home"> Sign in </Link>
    );
};

export default SignIn;
