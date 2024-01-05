import React, { useState } from "react";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";
import axios from "axios";
import styles from "../styles/Signup.module.css";
import toast from "react-hot-toast";

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
                toast.success("Account created successfully!");
                // window.open("/", "_self")
            })
            .catch((error) => {
                console.error(error);
                toast.error("Given username does exists!");
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
        <div className={styles.signupContainer}>
            <TopContainer text={"Sign up"}/>
            <div className={styles.signupCenter}>
                <div className={styles.signupSpaceContainer}>
                    <div className={styles.signupMargin}>
                        <form onSubmit={handleSubmit} className={styles.signupForm}>
                            <label className={styles.signupElements}>
                                Email:
                                <input
                                    className={`${styles.signupFormControl} me-2 ${styles.addMargin}`}
                                    type="text"
                                    name="name"
                                    value={account.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className={styles.signupElements}>
                                Login:
                                <input
                                    className={`${styles.signupFormControl} me-2 ${styles.addMargin}`}
                                    type="text"
                                    name="email"
                                    value={account.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className={styles.signupElements}>
                                Password:
                                <input
                                    className={`${styles.signupFormControl} me-2 ${styles.addMargin}`}
                                    type="password"
                                    name="password"
                                    value={account.password}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <br/>
                            <br/>
                            <button className={`btn ${styles.invertBtnColor}`} type="submit">
                                Create account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="detailsFootnote">
                <Footnote/>
            </div>
        </div>
    );
};

export default Signup;
