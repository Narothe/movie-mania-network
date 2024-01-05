import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import goodRate from "../assets/symbols/goodRate.png";
import midRate from "../assets/symbols/midRate.png";
import badRate from "../assets/symbols/badRate.png";
import MainLogo from "../elements/MainLogo";
import NotFound from "./NotFound";
import Footnote from "../elements/Footnote";
import moviesData from "../elements/moviesData.json";
import styles from "../styles/Details.module.css";

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
            <div className={styles.detailsNotFounds}>
                <div className="details-not-found">
                    <h1>Sorry</h1>
                    <h2>Movie not found</h2>
                </div>
                <NotFound />
            </div>
        );
    }

    return (
        <div className={styles.detailsPosition}>
            <div className={styles.detailsLogoPosition}>
                <MainLogo />
            </div>
            <div className={styles.detailsSplit}>
                <div className={styles.detailsNames}>
                    <h2>{selectedImage.title}</h2>
                    <p>{selectedImage.description}</p>
                </div>
                <div className={styles.detailsRightItems}>
                    <div className={styles.detailsTypeRate}>
                        <h4>{selectedImage.type}</h4>
                        <p>Rate: {selectedImage.rate}/10</p>
                    </div>
                    <div className={styles.detailsRateIcon}>
                        {selectedImage.rate >= 8 ? (
                            <img
                                className={styles.detailsRateImage}
                                src={goodRate}
                                alt="Good Rate"
                            />
                        ) : selectedImage.rate >= 4 ? (
                            <img className={styles.detailsRateImage} src={midRate} alt="Mid Rate" />
                        ) : (
                            <img className={styles.detailsRateImage} src={badRate} alt="Bad Rate" />
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.detailsDetails}>
                <img
                    className={styles.detailsImage}
                    src={require(`../assets/movie_window_view/${selectedImage.src}.jpg`)}
                    alt={selectedImage.title}
                />
                <p className={styles.detailsP}>{selectedImage.long_description}</p>
            </div>
            <div className={styles.detailsFootnote}>
                <Footnote />
            </div>
        </div>
    );
};

export default Details;
