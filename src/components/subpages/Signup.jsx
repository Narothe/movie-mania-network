import React from "react";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";

const Signup = () => {
    const handleSubmit = () => {
        console.log('Zarejestrowano nowe konto')
        alert('Konto utworzone! (aktualnie brak możliwości utworzenia konta)');
    };
    return (
        <div className="signup-container">
            <TopContainer text={'Sign up'}/>
            <div className="signup-center">
                <div className="signup-space-container">
                    <div className="signup-margin">
                        <form onSubmit={handleSubmit} className="signup-form">
                            {/*<div className="add-labels">*/}
                            <label className="signup-elements">
                                Login:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="text"
                                    name="login"
                                />
                            </label>
                            {/*</div>*/}
                            {/*<div className="add-labels">*/}
                            <label className="signup-elements">
                                Name:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="text"
                                    name="name"
                                />
                            </label>
                            {/*</div>*/}
                            {/*<div className="add-labels">*/}
                            <label className="signup-elements">
                                Email:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="text"
                                    name="email"
                                />
                            </label>
                            {/*</div>*/}
                            {/*<div className="add-labels">*/}
                            <label className="signup-elements">
                                Password:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                />
                            </label>
                            {/*</div>*/}
                            <br/>
                            <br/>
                            <button className="btn invert-btn-color" type="submit">Create account</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="details-footnote">
                <Footnote/>
            </div>
        </div>
    );
};

export default Signup;
