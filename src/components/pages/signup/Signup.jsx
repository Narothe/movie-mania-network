import React, {useEffect, useState} from "react";
import TopContainer from "../../elements/topContainer/TopContainer";
import Footnote from "../../elements/footnote/Footnote";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Signup.module.css";
import toast from "react-hot-toast";
import { useAuth } from "../../utils/AuthContext";
import {useSpring, animated} from "react-spring";
import githubLogo from "../../assets/logos/githubLogo.png";

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
                // console.log('response.data', response.data);
                localStorage.setItem('token', response.data.token);
                toast.success("Account created successfully!", {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
                    duration: 1500,
                });

                // Zaloguj użytkownika po rejestracji
                axios
                    .post("https://at.usermd.net/api/user/auth", {
                        login: account.email, // Użyj loginu, który został użyty podczas rejestracji
                        password: account.password,
                    })
                    .then((loginResponse) => {
                        // console.dir(loginResponse.data, {depth: null});
                        login(loginResponse.data.token);
                        toast.success("Logged in!", {
                            style: {
                                backgroundColor: 'rgba(49, 46, 49, 0.5)',
                                color: '#FFE1BF',
                            },
                            duration: 1500,
                        });

                        // Przejdź do strony głównej po zalogowaniu
                        setTimeout(() => {
                            navigate("/");
                        }, 1500);
                    })
                    .catch((loginError) => {
                        // console.error(loginError);
                        toast.error("Error during login.", {
                            style: {
                                backgroundColor: 'rgba(49, 46, 49, 0.5)',
                                color: '#FFE1BF',
                            },
                            duration: 1500,
                        });
                    });

            })
            .catch((error) => {
                // console.error(error);
                toast.error("Given username does exists!", {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
                    duration: 1500,
                });
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
                                        maxLength="20"
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
