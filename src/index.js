import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Categories from "./components/pages/categories/Categories";
import Add from "./components/pages/add/Add";
import NotFound from "./components/utils/NotFound";
import Signin from "./components/pages/signin/Signin";
import Signup from "./components/pages/signup/Signup";
import Category from "./components/pages/categories/Category";
import {AuthProvider} from "./components/utils/AuthContext";
import Details from "./components/pages/details/Details";
import Statistics from "./components/pages/statistics/Statistics";


createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="add" element={<Add/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="category" element={<Category/>}/>
                    <Route path="category/:categoryName" element={<Category/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="details" element={<Details/>}/>
                    <Route path="details/:id" element={<Details/>}/>
                    <Route path="statistics" element={<Statistics/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>,
    document.getElementById('root')
);

reportWebVitals();

