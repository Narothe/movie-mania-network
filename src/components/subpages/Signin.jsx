import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../elements/AuthContext";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";
import styles from "../styles/Signin.module.css";
import toast from "react-hot-toast";

const Signin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [account, setAccount] = useState({
        login: "",
        password: "",
    });

    const handleSubmit = (e) => {
        // localStorage.removeItem('token');

        e.preventDefault();
        axios
            .post("https://at.usermd.net/api/user/auth", account)
            .then((response) => {
                console.dir(response.data, { depth: null });
                login(response.data.token);
                toast.success("Signed!");
                // navigate("/");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Given username doesn't exist or password is wrong!");
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
    };

    return (
        <div className={styles.signinContainer}>
            <TopContainer text={'Sign in'}/>
            <div className={styles.signinCenter}>
                <div className={styles.signinSpaceContainer}>
                    <div className={styles.signinMargin}>
                        <form onSubmit={handleSubmit} className={styles.signinForm}>
                            <div className={styles.addLabels}>
                                <label className={styles.signinElements}>
                                    Login:
                                    <input
                                        className={`${styles.signinFormControl} me-2 ${styles.addMargin}`}
                                        type="text"
                                        name="login"
                                        value={account.login}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <label className={styles.signinElements}>
                                Password:
                                <input
                                    className={`${styles.signinFormControl} me-2 ${styles.addMargin}`}
                                    type="password"
                                    name="password"
                                    value={account.password}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className={`btn ${styles.invertBtnColor}`} type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.signinMarginTop}>
                <p className={`${styles.signinCenter} ${styles.signinBiggerFont}`}>Or:</p>

                <div className={styles.signinCenter}>
                    <Link to="/signup" className={`btn ${styles.btnColor} ${styles.btnSize}`} type="submit">Sign up</Link>
                </div>
            </div>
            <div className={styles.detailsFootnote}>
                <Footnote/>
            </div>
        </div>
    );
};

export default Signin;
