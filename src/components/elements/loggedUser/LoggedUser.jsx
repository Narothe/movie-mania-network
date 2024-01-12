import React, { useState, useEffect } from "react";
import styles from "./LoggedUser.module.css";
import { useAuth } from "../../utils/AuthContext";
import toast from 'react-hot-toast';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import pattern1 from "../../assets/userPorfiles/pattern1.png";
import pattern2 from "../../assets/userPorfiles/pattern2.png";
import pattern3 from "../../assets/userPorfiles/pattern3.png";
import pattern4 from "../../assets/userPorfiles/pattern4.png";
import pattern5 from "../../assets/userPorfiles/pattern5.png";


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
            return pattern1;
    }
};

const LoggedUser = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { token, logout } = useAuth();
    const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
    const decoded = token ? jwtDecode(token) : null;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMinute(new Date().getMinutes());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const handleImageClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        if (decoded && decoded.userId) {
            axios.delete(`https://at.usermd.net/api/user/logout/${decoded.userId}`)
                .then(response => {
                    console.log(response.data);
                    logout();
                    toast.success("Logout successfully!");
                })
                .catch(error => {
                    console.error(error);
                    toast.error("Error during logout!");
                });
        } else {
            console.error("User ID not found in decoded token.");
        }
    };

    const selectedPattern = getPatternByMinute(currentMinute);

    return (
        <div className={`position-absolute start-100 ${styles.btnSizeHome}`}>
            <div className={styles.rightContainer}>
                <div className={`${styles.positionOfUsername}`}>
                    {decoded.name}
                </div>
                <img
                    className={`btn ${styles.imgComponent}`}
                    src={selectedPattern}
                    alt={`pattern${selectedPattern}`}
                    onClick={handleImageClick}
                />
            </div>
            <div className={`${styles.dropdownContainer} ${isDropdownOpen ? styles.showDropdown : styles.hideDropdown}`}>
                <ul className={styles.dropdown}>
                    <li>
                        <button onClick={handleLogout} className={`nav-link rounded-2 ${styles.btnColor}`}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LoggedUser;
