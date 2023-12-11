import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="position-fixed top-50 start-50 translate-middle navbar-position">
            <nav className="navbar text-color rounded-top-2">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-color btn-size" type="submit"> >>></button>
                    </form>
                </div>
            </nav>
            {/*to change here*/}
            <nav className="navbar navbar-expand-lg text-color rounded-bottom-2">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-fill">
                            <li className="nav-item d-inline-flex flex-fill">
                                {/*<a className="btn-color nav-link rounded-2" aria-current="page" href="/categories">Categories</a>*/}
                                <Link to="/categories" className="btn-color nav-link rounded-2"> Categories </Link>
                            </li>
                            <li className="nav-item d-inline-flex flex-fill">
                                {/*<a className="btn-color nav-link rounded-2" href="/statistics">Statistics</a>*/}
                                <Link to="/statistics" className="btn-color nav-link rounded-2"> Statistics </Link>
                            </li>
                            <li className="nav-item d-inline-flex">
                                {/*<a className="btn-color nav-link rounded-2" href="/add_movie">Add</a>*/}
                                <Link to="/add_movie" className="btn-color nav-link rounded-2"> Add movie </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
