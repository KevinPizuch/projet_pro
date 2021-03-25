import React, {useState} from "react";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

const imgUrls = [
    "",
    "/images/svg/1-character.svg",
    "/images/svg/2-character.svg",
    "/images/svg/3-character.svg",
    "/images/svg/4-character.svg",
    "/images/svg/5-character.svg",
    "/images/svg/6-character.svg",
    "/images/svg/7-character.svg",
    "/images/svg/8-character.svg",
    "/images/svg/9-character.svg",
    "/images/svg/10-character.svg"
];

const Carousel = (props) => {
    const [currentImageIndex,
        setCurrentImageIndex] = useState(1)
    const [characterIndex,
        setCharacterIndex] = useState(1)

    function previousSlide() {
        setCurrentImageIndex(currentImageIndex <= 1
            ? 10
            : currentImageIndex - 1)

        props.changeCharacterIndex(currentImageIndex == 1
            ? 10
            : currentImageIndex - 1)
    }

    function nextSlide() {
        setCurrentImageIndex(currentImageIndex >= 10
            ? 1
            : currentImageIndex + 1)

        props.changeCharacterIndex(currentImageIndex == 10
            ? 1
            : currentImageIndex + 1)

    }
    return (
        <div className="carousel">
            <span id="carousel-arrow" onClick={previousSlide}><FaArrowLeft/>
            </span>
            <img src={imgUrls[currentImageIndex]} id={currentImageIndex}/>
            <span id="carousel-arrow" onClick={nextSlide}>
                <FaArrowRight/>
            </span>
        </div>
    );
}

export default Carousel