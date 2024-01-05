import React, { useState, useEffect } from "react";
import styles from "../styles/LoggedUser.module.css";
import { useAuth } from "./AuthContext";
import toast from 'react-hot-toast';

import pattern1 from "../assets/userPorfiles/pattern1.png";
import pattern2 from "../assets/userPorfiles/pattern2.png";
import pattern3 from "../assets/userPorfiles/pattern3.png";
import pattern4 from "../assets/userPorfiles/pattern4.png";
import pattern5 from "../assets/userPorfiles/pattern5.png";

const getPatternByMinute = (minute) => {
    switch (Math.floor(minute / 12)) {
        case 0:
            return pattern1;
        case 1:
            return pattern2;
        case 2:
            return pattern3;
        case 3:
            return pattern4;
        case 4:
            return pattern5;
        default:
            return pattern1; // Domyślny pattern, gdyby coś poszło nie tak
    }
};

const LoggedUser = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { logout } = useAuth();
    const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMinute(new Date().getMinutes());
        }, 60000); // Aktualizuj co minutę

        return () => clearInterval(interval);
    }, []);

    const handleImageClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        toast.success("Logout successfully!");
    };

    const selectedPattern = getPatternByMinute(currentMinute);

    return (
        <div className={`position-absolute start-100 ${styles.btnSizeHome}`}>
            <img
                className={`btn ${styles.imgComponent}`}
                src={selectedPattern}
                alt={`pattern${selectedPattern}`}
                onClick={handleImageClick}
            />
            {isDropdownOpen && (
                <ul className={styles.dropdown}>
                    <li>
                        <button onClick={handleLogout} className={`nav-link rounded-2 ${styles.btnColor}`}>Logout</button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LoggedUser;
