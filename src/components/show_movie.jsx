// Komponent Show_movie
import React from "react";
import { useLocation } from "react-router-dom";

const Show_movie = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const dataParam = searchParams.get("data");
    const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

    return (
        <div>
            <p>Data received: {data ? data.key : "No data available"}</p>
        </div>
    );
};

export default Show_movie;
