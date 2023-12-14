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
                        <div className="login-elements">
                            <form onSubmit={handleSubmit} className="login-form">
                                <label>
                                    Login:
                                    <input
                                        className="login-form-control me-2"
                                        type="text"
                                        name="login"
                                    />
                                </label>

                            </form>

                            {/*<p>Login:</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
