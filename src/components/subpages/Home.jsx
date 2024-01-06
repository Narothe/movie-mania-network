import React from "react";
import { useAuth } from "../elements/AuthContext";
import { jwtDecode } from "jwt-decode";
import Footnote from "../elements/Footnote";
import SignInButton from "../elements/SignInButton";
import LoggedUser from "../elements/LoggedUser";
import MainLogo from "../elements/MainLogo";
import Movies from "../elements/Movies";
import { useSpring, animated } from 'react-spring';
import styles from "../styles/Home.module.css";

const Home = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const {token} = useAuth();
    const decoded = token ? jwtDecode(token) : null;


    if (!token) {
        console.log("Użytkownik niezalogowany");
    } else {
        console.log("Użytkownik zalogowany\n", decoded);
        console.log("Token\n", token)
    }

    return (
        <animated.div style={props}>
            <div className="container">
                <nav className={`d-flex justify-content-center ${styles.homeNav}`}>
                    {token ? <LoggedUser userData={decoded}/> : <SignInButton/>}
                    <MainLogo/>
                </nav>
                <div>
                    <Movies category={1}/>
                    <Movies category={2}/>
                    <Movies category={3}/>
                    <Movies category={4}/>
                    <Movies category={5}/>
                </div>
                <div className={styles.footnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Home;
