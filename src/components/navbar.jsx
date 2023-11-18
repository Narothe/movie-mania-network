import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to="/categories" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Categories</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/statistics" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Statistics</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/add_movie" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Add movie</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
