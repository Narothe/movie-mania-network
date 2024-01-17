import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useAuth} from "../../utils/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const {token} = useAuth();


    const handleSearch = async (e) => {
        e.preventDefault();

        const searchTerm = e.target.elements.search.value.toLowerCase();
        // console.log('Wartość z formularza:', searchTerm);

        if (searchTerm.length < 4) {
            toast.error('Enter minimum 4 characters', {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
                duration: 1500,
            });
        } else {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies`);
                setSearchResults(response.data);

                const foundMovies = response.data.filter((movie) =>
                    movie.title && movie.title.toLowerCase().includes(searchTerm)
                );

                if (foundMovies.length > 0) {
                    setMovieSuggestions(foundMovies);
                }

                const foundMovie = foundMovies.find((movie) =>
                    movie.title && movie.title.toLowerCase().includes(searchTerm)
                );

                if (foundMovie) {
                    navigate(`/details/${foundMovie.id}`);
                } else {
                    toast.error('There is no such movie', {
                        style: {
                            backgroundColor: 'rgba(49, 46, 49, 0.5)',
                            color: '#FFE1BF',
                        },
                        duration: 1500,
                    });
                }
            } catch (error) {
                // console.error('Błąd przy wyszukiwaniu filmu', error);
                toast.error('Strange error occurred!', {
                    style: {
                        backgroundColor: 'rgba(49, 46, 49, 0.5)',
                        color: '#FFE1BF',
                    },
                    duration: 1500,
                });
            }
        }
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.navbarPosition} position-fixed start-50 translate-middle`}
             style={{top: scrollPosition > 30 ? '30%' : '50%'}}>
            <nav className={`${styles.navBar} ${styles.textColor} navbar rounded-top-2`}>
                <div className="container-fluid">
                    <form onSubmit={handleSearch} className="d-flex" role="search">
                        <input name="search" className={`${styles.formControl} form-control me-2`} type="search"
                               placeholder="Search" aria-label="Search"/>
                        <button className={`btn ${styles.btnColor} ${styles.navbarBtnSize}`} type="submit">
                            {' '}
                            >>>
                        </button>
                    </form>
                </div>
            </nav>
            <nav className={`${styles.navBar} navbar navbar-expand-lg ${styles.textColor} rounded-bottom-2`}>
                <div className="container-fluid">
                    <div className={`${styles.navbarCollapse}`} id="navbarNav">
                        <ul className="navbar-nav flex-fill">
                            <li className="nav-item d-inline-flex flex-fill">
                                <Link
                                    to="/categories"
                                    className={`${styles.btnColor} nav-link rounded-2`}
                                    style={{userSelect: 'none'}}
                                >
                                    {' '}
                                    Categories{' '}
                                </Link>
                            </li>
                            <li className="nav-item d-inline-flex flex-fill">
                                <Link
                                    to="/statistics"
                                    className={`${styles.btnColor} nav-link rounded-2`}
                                    style={{userSelect: 'none'}}
                                >
                                    {' '}
                                    Statistics{' '}
                                </Link>
                            </li>
                            <li className="nav-item d-inline-flex">
                                {token ? (
                                    <Link
                                        to="/add"
                                        className={`${styles.btnColor} nav-link rounded-2`}
                                        style={{userSelect: 'none'}}
                                    >
                                        {' '}
                                        Add movie{' '}
                                    </Link>
                                ) : (
                                    <span
                                        className={`${styles.btnColor} nav-link rounded-2`}
                                        onClick={() => toast.error('You need to log in to access this page', {
                                            style: {
                                                backgroundColor: 'rgba(49, 46, 49, 0.5)',
                                                color: '#FFE1BF',
                                            },
                                            duration: 1500,
                                        })
                                    }
                                        style={{userSelect: 'none', cursor: 'pointer'}}
                                    >
                                        {' '}
                                        Add movie{' '}
                                    </span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
