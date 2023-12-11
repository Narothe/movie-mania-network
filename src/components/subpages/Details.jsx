import React from "react";
import { useParams } from "react-router-dom";
import moviesDetails from "../elements/MoviesData";
import goodRate from "../assets/symbols/goodRate.png";
import midRate from "../assets/symbols/midRate.png";
import badRate from "../assets/symbols/badRate.png";

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
                <div className="details-right-items">
                    <div className="details-type-rate">
                        <h4>{selectedImage.type}</h4>
                        <p>Rate: {selectedImage.rate}/10</p>
                    </div>
                    <div className="details-rate-icon">
                            {selectedImage.rate >= 8 ? (
                                <img className="details-rate-image" src={goodRate} alt="Good Rate" />
                            ) : selectedImage.rate >= 4 ? (
                                <img className="details-rate-image" src={midRate} alt="Mid Rate" />
                            ) : (
                                <img className="details-rate-image" src={badRate} alt="Bad Rate" />
                            )}
                    </div>
                </div>
            </div>
            <div className="details-details">
                <img className="details-image" src={selectedImage.src} alt={selectedImage.title}/>
                <p className="details-p">{selectedImage.long_description}</p>
            </div>
        </div>
    );
};

export default Details;
