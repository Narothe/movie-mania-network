import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from "../elements/moviesData.json";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/styles.css";
import styles from "../styles/Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        // Filtruj filmy według wpisanej frazy
        const results = moviesData.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Ustaw wyniki w stanie komponentu
        setSearchResults(results);

        // Jeśli znaleziono dokładnie jeden film, przekieruj do jego szczegółów
        if (results.length === 1) {
            navigate(`/details/${results[0].id}`);
        } else if (results.length === 0) {
            // Jeśli nie znaleziono żadnego filmu, wyświetl alert
            alert("Nie znaleziono filmu o podanej nazwie.");
        }
    };

    return (
        <div className={`position-fixed top-50 start-50 translate-middle ${styles.navbarPosition}`}>
            <nav onSubmit={handleSearch} className={`${styles.navBar} ${styles.textColor} navbar rounded-top-2`}>
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className={`${styles.formControl} me-2`} type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button className={`btn ${styles.btnColor} ${styles.navbarBtnSize}`} type="submit"> >>></button>
                    </form>
                </div>
            </nav>
            {/*to change here*/}
            <nav className={`${styles.navBar} navbar navbar-expand-lg ${styles.textColor} rounded-bottom-2`}>
                <div className="container-fluid">
                    <div className={`${styles.navbarCollapse}`} id="navbarNav">
                        <ul className="navbar-nav flex-fill">
                            <li className="nav-item d-inline-flex flex-fill">
                                <Link to="/categories" className={`${styles.btnColor} nav-link rounded-2`}> Categories </Link>
                            </li>
                            <li className="nav-item d-inline-flex flex-fill">
                                <Link to="/statistics" className={`${styles.btnColor} nav-link rounded-2`}> Statistics </Link>
                            </li>
                            <li className="nav-item d-inline-flex">
                                <Link to="/add" className={`${styles.btnColor} nav-link rounded-2`}> Add movie </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
