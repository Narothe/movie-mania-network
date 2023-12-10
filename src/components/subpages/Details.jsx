import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    // Odczytaj tytuł z parametrów ścieżki
    const { title } = useParams();

    return (
        <div>
            <h2>{title}</h2>
            <p>
                Lorem ipsum.
            </p>
        </div>
    );
};

export default Details;
