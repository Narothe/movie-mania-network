import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import TopContainer from "../../elements/topContainer/TopContainer";
import Footnote from "../../elements/footnote/Footnote";
import styles from "./Signin.module.css";
import toast from "react-hot-toast";
import {useSpring, animated} from "react-spring";

const Signin = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    const {login} = useAuth();
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
                console.dir(response.data, {depth: null});
                login(response.data.token);
                toast.success("Signed!", {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
                });
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Given username doesn't exist or password is wrong!", {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
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
                        <Link to="/signup" className={`btn ${styles.btnColor} ${styles.btnSize}`} type="submit">Sign
                            up</Link>
                    </div>
                </div>
                <div className={styles.detailsFootnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Signin;
