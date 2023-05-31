import React from "react";
import Slider from "react-slick";
import { ImageWrapper } from "Container";

const SliderComponent = (props) => {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <React.Fragment>
            <Slider {...settings}>
                <ImageWrapper>
                    <img src="./img/slide-1.jpg" alt="Banner" />
                </ImageWrapper>
                <ImageWrapper>
                    <img src="./img/slide-2.jpg" alt="Banner" />
                </ImageWrapper>
                <ImageWrapper>
                    <img src="./img/Banner.jpg" alt="Banner" />
                </ImageWrapper>
            </Slider>
        </React.Fragment>
    );
};


export default SliderComponent;