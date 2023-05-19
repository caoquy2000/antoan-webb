import { ContainerWrapper } from "Container";
import React from "react";
import styled from "styled-components";

const BannerSection = (props) => {
    const {
        imgLink,
    } = props;
    return (
        <BannerSectionWrapper>
            <ContainerWrapper>
                <BannerSectionImage>
                    <img src={imgLink ? imgLink : './img/banner-service.png'} alt="Banner Service" />
                </BannerSectionImage>
            </ContainerWrapper>
        </BannerSectionWrapper>
    );
};

const BannerSectionWrapper = styled.section`

`; 

const BannerSectionImage = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        object-fit: cover;
    }
`;

export default BannerSection;