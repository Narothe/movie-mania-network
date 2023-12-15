import React from "react";
import TopContainer from "../elements/TopContainer";
import {Link} from "react-router-dom";

const Signin = () => {
    const handleSubmit = () => {
        console.log('Zalogowano')
        alert('Zalogowano! (aktualnie brak możliwości zalogowania)');
    };
    return (
        <div className="signin-container">
            <TopContainer text={'Sign in'}/>
            <div className="signin-center">
                <div className="signin-space-container">
                    <div className="signin-margin">
                        <form onSubmit={handleSubmit} className="signin-form">
                            <div className="add-labels">
                                <label className="signin-elements">
                                    Login:
                                    <input
                                        className="signin-form-control me-2 add-margin"
                                        type="text"
                                        name="signin"
                                    />
                                </label>
                            </div>
                            <label className="signin-elements">
                                Password:
                                <input
                                    className="signin-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className="btn invert-btn-color" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="signin-margin-top ">
                <p className="signin-center signin-bigger-font">Or:</p>

                <div className="signin-center">
                    <Link to="/signup" className="btn btn-color btn-size" type="submit">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;
