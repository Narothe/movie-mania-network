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
} from "react-router-dom";
import Home from "./components/subpages/Home";
import Categories from "./components/subpages/Categories";
import Statistics from "./components/subpages/Statistics";
import Add from "./components/subpages/Add";
import NotFound from "./components/subpages/NotFound";
import Login from "./components/subpages/Login";
import Details from "./components/subpages/Details";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="add_movie" element={<Add/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="details" element={<Details/>}/>
                    <Route path="details/:id" element={<Details/>}/>
                    <Route path="statistics" element={<Statistics/>}/>

                    {/*<Route index element={<Navigate to="/" />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

