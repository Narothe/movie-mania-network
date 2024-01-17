import './App.css';
import Navbar from "./components/elements/navbar/Navbar";
import {Link, Outlet, useLocation} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Toaster} from "react-hot-toast";
import styles from "./components/assets/logos/githubLogo.module.css";
import githubLogo from "./components/assets/logos/githubLogo.png";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="container-fluid">
            {/*navbar visible only in /home subpage*/}
            {isHomePage && <Navbar/>}
            <div className="container">
                <Toaster />
                <Outlet/>
                <Link to={"https://github.com/Narothe/movie-mania-network"} className={styles.githubLogo}>
                    <img src={githubLogo} alt="githubLogo" className={styles.githubLogoW}/>
                </Link>
            </div>
        </div>
    );
}

export default App;
