import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import goodRate from "../assets/symbols/goodRate.png";
import midRate from "../assets/symbols/midRate.png";
import badRate from "../assets/symbols/badRate.png";
import MainLogo from "../elements/MainLogo";
import NotFound from "./NotFound";
import Footnote from "../elements/Footnote";
import moviesData from "../elements/moviesData.json";

const Details = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Wyszukaj film o zadanym id w danych wczytanych z pliku JSON
        const image = moviesData.find((img) => img.id.toString() === id);
        setSelectedImage(image);
    }, [id]);

    if (!selectedImage) {
        return (
            <div className="details-not-founds">
                <div className="details-not-found">
                    <h1>Sorry</h1>
                    <h2>Movie not found</h2>
                </div>
                <NotFound />
            </div>
        );
    }

    return (
        <div className="details-position">
            <div className="details-logo-position">
                <MainLogo />
            </div>
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
                            <img
                                className="details-rate-image"
                                src={goodRate}
                                alt="Good Rate"
                            />
                        ) : selectedImage.rate >= 4 ? (
                            <img className="details-rate-image" src={midRate} alt="Mid Rate" />
                        ) : (
                            <img className="details-rate-image" src={badRate} alt="Bad Rate" />
                        )}
                    </div>
                </div>
            </div>
            <div className="details-details">
                <img
                    className="details-image"
                    src={require(`../assets/movie_window_view/${selectedImage.src}.jpg`)}
                    alt={selectedImage.title}
                />
                <p className="details-p">{selectedImage.long_description}</p>
            </div>
            <div className="details-footnote">
                <Footnote />
            </div>
        </div>
    );
};

export default Details;
