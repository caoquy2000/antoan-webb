
import SliderComponent from "component/silder/Slider";
import React from "react";
import styled, { keyframes } from "styled-components";
import * as variable from 'common/variable';
import IntroSection from "component/section/intro-section/IntroSection";
import MissionSection from "component/section/mission-section/MissionSection";
import ServiceSection from "component/section/service-section/ServiceSection";
import ChooseSection from "component/section/choose-section/ChooseSection";
import CustomerSection from "component/section/customer-section/CustomerSection";
import NewsSection from "component/section/news-section/NewsSection";


const Home = (props) => {
    return (
        <>
            <SliderSection>
                <SliderComponent />
                <BannerOverlay />
                <ContentWrapper>
                    <div className="text-wrapper">
                        <span className="text1">Công Ty Bảo Vệ An Toàn</span>
                        <span className="text2">Uy Tín - Trách Nhiệm</span>
                    </div>
                    <div className="button-wrapper" >
                        <a href="#">
                            <span>
                                Xem Dịch Vụ
                            </span>
                            <img src="./img/arrow-right.svg" alt="icon" />
                        </a>
                    </div>
                </ContentWrapper>
            </SliderSection>
            <IntroSection />
            <MissionSection />
            <ServiceSection />
            <ChooseSection />
            <CustomerSection />
            <NewsSection />
        </>
    );
};

const SliderSection  = styled.section`
    width: 100%;
    height: 0px;
    padding-bottom: 46.5%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    margin-bottom: 50px;
`;

const BannerOverlay = styled.div `
    width: 100%;
    height: 100%;
    background-color: ${variable.BLACK_COLOR};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 2;
`;

const animateArrow = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(10px);
    }
`;

const ContentWrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    text-align: center;
    .text-wrapper {
        color: ${variable.WHITE_COLOR};
        span {
            display: block;
            text-transform: uppercase;
            font-family: 'OSB', sans-serif;
        }
        .text1 {
            font-size: 35px;
        }
        .text2 {
            font-size: 28px;
        }
    }
    .button-wrapper {
        display: inline-block;
        margin-top: 15px;
    }
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${variable.WHITE_COLOR};
        padding: 10px 20px;
        background-color: ${variable.THIRD_COLOR};
        border-radius: 4px;
        span {
            margin-right: 6px;
        }
        img {
            animation: ${animateArrow} 1s linear infinite;
            filter: invert(100%) sepia(81%) saturate(0%) hue-rotate(142deg) brightness(106%) contrast(104%);
        }
    }
    @media (max-width: ${variable.XS_MAX}) {
        .text-wrapper {
            .text1 {
                font-size: 28px;
            }
            .text2 {
                font-size: 22px;
            }
        }
        a {
            font-size: 16px;
            padding: 5px 10px;
        }
    }
    @media (max-width: 500px) {
        .text-wrapper {
            .text1 {
                font-size: 22px;
            }
            .text2 {
                font-size: 16px;
            }
        }
        a {
            font-size: 12px;
            padding: 5px 10px;
        }
    }
    @media (max-width: 420px) {
        .text-wrapper {
            .text1 {
                font-size: 18px;
            }
            .text2 {
                font-size: 15px;
            }
        }
        a {
            font-size: 12px;
            padding: 5px 10px;
        }
    }
`;


export default Home;