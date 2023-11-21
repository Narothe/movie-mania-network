import React, {useState} from "react";
import thumbnailImage1 from "../assets/movie_window_view/climate.jpg";
import thumbnailImage2 from "../assets/movie_window_view/clouds.jpg";
import thumbnailImage3 from "../assets/movie_window_view/hobbit.jpg";
import thumbnailImage4 from "../assets/movie_window_view/fireworks.jpg";
import thumbnailImage5 from "../assets/movie_window_view/flower_pot.jpg";
import thumbnailImage6 from "../assets/movie_window_view/flowers.jpg";
import thumbnailImage7 from "../assets/movie_window_view/galaxy.jpg";
import thumbnailImage8 from "../assets/movie_window_view/ghost.jpg";

import goodRate from "../assets/symbols/goodRate.png"
import midRate from "../assets/symbols/midRate.png"
import badRate from "../assets/symbols/badRate.png"

const Movies = () => {
    const images = [
        { src: thumbnailImage1, title: "Climate", type: "Documentary", description:"Why climate change is bad.", rate: 9 },
        { src: thumbnailImage2, title: "Clouds", type: "Documentary", description:"How about cloud formation are forming.", rate: 8 },
        { src: thumbnailImage3, title: "Hobbit", type: "Adventure", description:"Amazing adventure of little Hobbit", rate: 9 },
        { src: thumbnailImage4, title: "Fireworks", type: "Documentary", description:"Why fireworks are on fire.", rate: 6 },
        { src: thumbnailImage5, title: "Flower Pot", type: "Documentary", description:"Safe tips to keep plans in home.", rate: 4 },
        { src: thumbnailImage6, title: "Flowers", type: "Documentary", description:"Different varieties of flowers.", rate: 2 },
        { src: thumbnailImage7, title: "Galaxy", type: "Documentary", description:"Stars in our galaxy.", rate: 10 },
        { src: thumbnailImage8, title: "Ghostbusters", type: "Documentary", description:"Brave team want to catch ghosts.", rate: 9 },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    const visibleImages = images.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleNext = () => {
        const totalPages = Math.ceil(images.length / itemsPerPage);
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevious = () => {
        const totalPages = Math.ceil(images.length / itemsPerPage);
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };
    return (
        <div className="margin-bottom">
            <div className="d-flex justify-content-end button-margin">
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
            <div className="d-flex position-relative">
                {visibleImages.map((image, index) => (
                    <div
                        key={index}
                        className="thumbnail-container"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="thumbnail-image"
                            src={image.src}
                            alt={`thumbnail ${index}`}
                        />
                        {hoveredImage === index && (
                            <div className="thumbnail-info">
                                <p>{image.title}</p>
                                <p>{image.description}</p>
                                <p>Rate: {image.rate}/10</p>
                                {image.rate >= 8 ? (
                                    <img className="rate-image" src={goodRate} alt="Good Rate" />
                                ) : image.rate >= 4 ? (
                                    <img className="rate-image" src={midRate} alt="Mid Rate" />
                                ) : (
                                    <img className="rate-image" src={badRate} alt="Bad Rate" />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
