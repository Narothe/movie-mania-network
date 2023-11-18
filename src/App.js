import './App.css';
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
