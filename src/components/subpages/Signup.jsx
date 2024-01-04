import React, { useState } from "react";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";
import axios from "axios";

const Signup = () => {
    const [account, setAccount] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://at.usermd.net/api/user/create",
                account
            )
            .then((response) => {
                console.log('response.data', response.data);
                localStorage.setItem('token', response.data.token);
                alert("Account created successfully!");
                window.open("/", "_self")
            })
            .catch((error) => {
                console.error(error);
                alert("Given username does exists!");
            });
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
    };

    return (
        <div className="signup-container">
            <TopContainer text={"Sign up"}/>
            <div className="signup-center">
                <div className="signup-space-container">
                    <div className="signup-margin">
                        <form onSubmit={handleSubmit} className="signup-form">
                            <label className="signup-elements">
                                Email:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="text"
                                    name="name"
                                    value={account.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className="signup-elements">
                                Login:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="text"
                                    name="email"
                                    value={account.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className="signup-elements">
                                Password:
                                <input
                                    className="signup-form-control me-2 add-margin"
                                    type="password"
                                    name="password"
                                    value={account.password}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className="btn invert-btn-color" type="submit">
                                Create account
                            </button>
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
