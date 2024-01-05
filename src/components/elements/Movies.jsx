import React, { useState } from "react";
import { Link } from "react-router-dom";
import goodRate from "../assets/symbols/goodRate.png";
import midRate from "../assets/symbols/midRate.png";
import badRate from "../assets/symbols/badRate.png";
import moviesData from "./moviesData.json";


const Movies = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    const visibleImages = moviesData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleNext = () => {
        const totalPages = Math.ceil(moviesData.length / itemsPerPage);
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevious = () => {
        const totalPages = Math.ceil(moviesData.length / itemsPerPage);
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const handleImageClick = (id) => {
        const selectedImg = moviesData.find((img) => img.id === Number(id));
        setSelectedImage(selectedImg);
    };

    return (
        <div className="margin-bottom">
            <div className="d-flex justify-content-between button-margin">
                <div className="movies-category-name">
                    <p>Category {props.category}</p>
                </div>
                <div className="movies-buttons">
                <button
                    className="btn-color nav-link rounded-2 margin-right"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button
                    className="btn-color nav-link rounded-2"
                    onClick={handleNext}
                >
                    Next
                </button>
                </div>
            </div>
            <div className="d-flex position-relative">
                {visibleImages.map((image, index) => (
                    <Link
                        key={index}
                        to={`/details/${image.id}`}
                        className="thumbnail-container"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleImageClick(image.id)}
                    >
                        <img
                            className="thumbnail-image"
                            src={require(`../assets/movie_window_view/${image.src}.jpg`)}
                            alt={`thumbnail ${index}`}
                        />
                        {hoveredImage === index && (
                            <div className="thumbnail-info">
                                <p>{image.title}</p>
                                <p>{image.description}</p>
                                <p>Rate: {image.rate}/10</p>
                                {image.rate >= 8 ? (
                                    <img
                                        className="rate-image"
                                        src={goodRate}
                                        alt="Good Rate"
                                    />
                                ) : image.rate >= 4 ? (
                                    <img className="rate-image" src={midRate} alt="Mid Rate" />
                                ) : (
                                    <img className="rate-image" src={badRate} alt="Bad Rate" />
                                )}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
            {selectedImage && (
                <div>
                    <h2>{selectedImage.id}</h2>
                </div>
            )}
        </div>
    );
};

export default Movies;
