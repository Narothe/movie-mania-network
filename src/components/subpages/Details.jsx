import React from "react";
import { useParams } from "react-router-dom";
import moviesDetails from "../elements/MoviesData";

const Details = () => {
    const {id} = useParams();
    const selectedImage = moviesDetails.find((img) => img.id.toString() === id);

    if (!selectedImage) {
        return <p>Movie not found</p>;
    }

    return (
        <div className="details-position">
            <div className="details-split">
                <div className="details-names">
                    <h2>{selectedImage.title}</h2>
                    <p>{selectedImage.description}</p>
                </div>
                <div className="details-type-rate">
                    <h4>{selectedImage.type}</h4>
                </div>
            </div>
            <div className="details-details">
                <img className="details-image" src={selectedImage.src} alt={selectedImage.title}/>
                <p className="details-p">{selectedImage.long_description}</p>
                <div className="details-moreInfo">

                </div>
            </div>
        </div>
    );
};

export default Details;
