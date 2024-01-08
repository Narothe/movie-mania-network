import React, {useEffect, useState} from "react";
import TopContainer from "../../elements/topContainer/TopContainer";
import Footnote from "../../elements/footnote/Footnote";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import toast from "react-hot-toast";
import { useAuth } from "../../elements/AuthContext";
import {useSpring, animated} from "react-spring";

const Signup = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    const {login} = useAuth();
    const navigate = useNavigate();

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

                // Zaloguj użytkownika po rejestracji
                axios
                    .post("https://at.usermd.net/api/user/auth", {
                        login: account.email, // Użyj loginu, który został użyty podczas rejestracji
                        password: account.password,
                    })
                    .then((loginResponse) => {
                        console.dir(loginResponse.data, {depth: null});
                        login(loginResponse.data.token);
                        toast.success("Logged in!");

                        // Przejdź do strony głównej po zalogowaniu
                        setTimeout(() => {
                            navigate("/");
                        }, 1500);
                    })
                    .catch((loginError) => {
                        console.error(loginError);
                        toast.error("Error during login.");
                    });

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
        <animated.div style={props}>
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
        </animated.div>
    );
};

export default Signup;
