import './App.css';
import Navbar from "./components/elements/Navbar";
import { Outlet, useLocation  } from "react-router-dom";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="container-fluid">
            {/*navbar visible only in /home subpage*/}
            {isHomePage && <Navbar/>}
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
