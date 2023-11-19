import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

const Navbar = () => {
    return (
        <div class="position-absolute top-50 start-50 translate-middle border border-3 rounded-2">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-color btn-size" type="submit"> >>> </button>
                    </form>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/statistics">Statistics</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
