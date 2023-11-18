import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import Statistics from "./components/statistics";
import Add_movie from "./components/add_movie";
import NotFound from "./components/notFound";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>

                    <Route path="home" element={<Home/>}/>

                    <Route path="categories" element={<Categories/>}/>
                    <Route path="statistics" element={<Statistics/>}/>
                    <Route path="add_movie" element={<Add_movie/>}/>

                    <Route path="*" element={<NotFound/>}/>

                    <Route index element={<Navigate to="/home" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

