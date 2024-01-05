import './App.css';
import Navbar from "./components/elements/Navbar";
import { Outlet, useLocation  } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import React from "react";
import {Toaster} from "react-hot-toast";

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
            </div>
        </div>
    );
}

export default App;
