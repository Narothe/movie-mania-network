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
import Signin from "./components/subpages/Signin";
import Details from "./components/subpages/Details";
import Signup from "./components/subpages/Signup";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="add" element={<Add/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>
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

