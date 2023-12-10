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
import Home from "./components/subpages/home";
import Categories from "./components/subpages/categories";
import Statistics from "./components/subpages/statistics";
import AddMovie from "./components/subpages/addMovie";
import NotFound from "./components/subpages/notFound";
import Login from "./components/subpages/login";
import ShowMovie from "./components/subpages/showMovie";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="add_movie" element={<AddMovie/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="show_movie" element={<ShowMovie/>}/>
                    <Route path="statistics" element={<Statistics/>}/>

                    {/*<Route index element={<Navigate to="/" />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

