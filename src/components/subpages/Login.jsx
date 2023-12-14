import React from "react";
import TopContainer from "../elements/TopContainer";

const Login = () => {
    const handleSubmit = () => {
        console.log('Zalogowano')
        alert('Zalogowano! (aktualnie brak możliwości zalogowania)');
    };
    return (
        <div className="login-container">
            <TopContainer text={'Login'}/>
            <div className="login-center">
                <div className="login-space-container">
                    <div className="login-margin">
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="add-labels">
                                <label className="login-elements">
                                    Login:
                                    <input
                                        className="login-form-control me-2 add-margin"
                                        type="text"
                                        name="login"
                                    />
                                </label>
                            </div>
                            <label className="login-elements">
                                Password:
                                <input
                                    className="login-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className="btn invert-btn-color" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="login-margin-top ">
                <p className="login-center login-bigger-font">Or:</p>

                <div className="login-center">
                    <button className="btn btn-color btn-size" type="submit">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
