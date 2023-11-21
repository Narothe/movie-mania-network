import React, {useState} from "react";
import thumbnailImage1 from "../assets/movie_window_view/climate.jpg";
import thumbnailImage2 from "../assets/movie_window_view/clouds.jpg";
import thumbnailImage3 from "../assets/movie_window_view/earth.jpg";
import thumbnailImage4 from "../assets/movie_window_view/fireworks.jpg";
import thumbnailImage5 from "../assets/movie_window_view/flower_pot.jpg";
import thumbnailImage6 from "../assets/movie_window_view/flowers.jpg";
import thumbnailImage7 from "../assets/movie_window_view/galaxy.jpg";
import thumbnailImage8 from "../assets/movie_window_view/ghost.jpg";

const Movies = () => {
    const images = [
        { src: thumbnailImage1, title: "Climate" },
        { src: thumbnailImage2, title: "Clouds" },
        { src: thumbnailImage3, title: "Earth" },
        { src: thumbnailImage4, title: "Fireworks" },
        { src: thumbnailImage5, title: "Flower Pot" },
        { src: thumbnailImage6, title: "Flowers" },
        { src: thumbnailImage7, title: "Galaxy" },
        { src: thumbnailImage8, title: "Ghost" },
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
                                {/* Dodaj inne informacje, które chcesz wyświetlić */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
