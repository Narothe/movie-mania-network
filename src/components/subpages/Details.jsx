import React from "react";
import { useParams } from "react-router-dom";
import moviesDetails from "../elements/MoviesData";

const Details = () => {
    const { id } = useParams();
    const selectedImage = moviesDetails.find((img) => img.id.toString() === id);

    if (!selectedImage) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h2>{selectedImage.id}</h2>
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            {/* Dodaj dowolne inne informacje, które chcesz wyświetlić */}
        </div>
    );
};

export default Details;
