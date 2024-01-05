import React, {useState} from "react";
import axios from "axios";
import TopContainer from "../elements/TopContainer";
import {Link} from "react-router-dom";
import Footnote from "../elements/Footnote";
import styles from "../styles/Signin.module.css";

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
