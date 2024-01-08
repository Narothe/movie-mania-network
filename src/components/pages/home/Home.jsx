import React, {useEffect} from "react";
import { useAuth } from "../../elements/AuthContext";
import { jwtDecode } from "jwt-decode";
import Footnote from "../../elements/footnote/Footnote";
import SignInButton from "../../elements/SignInButton";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import MainLogo from "../../elements/mainLogo/MainLogo";
import Movies from "../../elements/Movies";
import { useSpring, animated } from 'react-spring';
import styles from "./Home.module.css";
import NewMovies from "../../elements/NewMovies";

const Home = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const {token} = useAuth();
    const decoded = token ? jwtDecode(token) : null;

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    if (!token) {
        console.log("Użytkownik niezalogowany");
    } else {
        console.log("Użytkownik zalogowany\n", decoded);
        console.log("Token\n", token)
    }

    return (
        <animated.div style={props}>
            <div className={`container ${styles.colors}`}>
                <nav className={`d-flex justify-content-center ${styles.homeNav}`}>
                    {token ? <LoggedUser userData={decoded}/> : <SignInButton/>}
                    <MainLogo/>
                </nav>
                <div>
                    {/*<Movies category={1}/>*/}
                    {/*<Movies category={2}/>*/}
                    {/*<Movies category={3}/>*/}
                    {/*<Movies category={4}/>*/}
                    {/*<Movies category={5}/>*/}
                    <NewMovies/>
                </div>
                <div className={styles.footnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Home;