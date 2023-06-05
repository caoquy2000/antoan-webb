import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const RecruitBanner = (props) => {
    const {
        buttonText,
        img,
    } = props;
    return (
        <RecruitBannerWrapper>
            <img src={img} alt="Tuyen Dung Img" />
            <RecruitBannerOverlay />
            <RecruitBannerButton
                href="javascript:void(0)"
            >
                {buttonText}
            </RecruitBannerButton>
        </RecruitBannerWrapper>
    );
};

const RecruitBannerWrapper = styled.section`
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 45%;
    z-index: 1;
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
`;

const RecruitBannerOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${variable.BLACK_COLOR};
    opacity: 0.4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`;

const RecruitBannerButton = styled.a`
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    color: ${variable.WHITE_COLOR};
    background-color: ${variable.THIRD_COLOR};
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        color: ${variable.RED_COLOR};
        background-color: ${variable.WHITE_COLOR};
        transition: all linear 500ms;
    }
    @media (max-width: 900px) {
        font-size: 22px;
        padding: 5px 12px;
    }
    @media (max-width: 550px) {
        font-size: 18px;
        padding: 2px 8px;
    }
`;

export default RecruitBanner;