import React, {useState} from "react";
import axios from "axios";
import TopContainer from "../elements/TopContainer";
import {Link} from "react-router-dom";
import Footnote from "../elements/Footnote";

const Signin = () => {
    const [account, setAccount] = useState({
        login: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://at.usermd.net/api/user/auth",
                account
            )
            .then(response => {
                    console.log('response.data', response.data);
                    localStorage.setItem('token', response.data.token);
                    alert("Signed!");
                    window.open("/", "_self")

                }
            ).catch(error => {
            console.error(error);
            alert("Given username does't exists or password is wrong!");
        })
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
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
                                        value={account.login}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <label className="signin-elements">
                                Password:
                                <input
                                    className="signin-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                    value={account.password}
                                    onChange={handleInputChange}
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
