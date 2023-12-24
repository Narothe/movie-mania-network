import React, {useState} from "react";
import axios from "axios";
import TopContainer from "../elements/TopContainer";
import {Link} from "react-router-dom";
import Footnote from "../elements/Footnote";

const Signin = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://at.usermd.net", {
                login,
                password,
            });

            // Tutaj możesz obsłużyć odpowiedź od serwera, na przykład ustawiając stan zalogowanego użytkownika w twojej aplikacji.
            console.log("Zalogowano", response.data);
        } catch (error) {
            // Tutaj możesz obsłużyć błędy, na przykład wyświetlając komunikat o błędzie.
            console.error("Błąd logowania", error);
            alert("Błąd logowania");
        }
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
                                        name="login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </label>
                            </div>
                            <label className="signin-elements">
                                Password:
                                <input
                                    className="signin-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
            <div className="details-footnote">
                <Footnote/>
            </div>
        </div>
    );
};

export default Signin;
