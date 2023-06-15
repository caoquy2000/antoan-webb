
import SliderComponent from "component/silder/Slider";
import React from "react";
import styled, { keyframes } from "styled-components";
import * as variable from 'common/variable';
import Head from "next/head";
import { Suspense } from "react";
import { lazy } from "react";
import { Skeleton } from "@mui/material";

const LazyIntroComponent = lazy(() => import("component/section/intro-section/IntroSection"));
const LazyMissionComponent = lazy(() => import("component/section/mission-section/MissionSection"));
const LazyChooseComponent = lazy(() => import("component/section/choose-section/ChooseSection"));
const LazyServiceComponent = lazy(() => import("component/section/service-section/ServiceSection"));
const LazyCustomerComponent = lazy(() => import("component/section/customer-section/CustomerSection"));
const LazyNewsComponent = lazy(() => import("component/section/news-section/NewsSection"));

const renderLoading = () => {
    return (
        <Skeleton 
            x={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width="100%"
            height="100%"
        />
    )
}

const Home = (props) => {
    return (
        <>
           <Head>
                <title>
                    Trang Chủ
                </title>
            </Head>
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
            <Suspense fallback={renderLoading()}>
                <LazyIntroComponent />
            </Suspense>
            <Suspense fallback={renderLoading()}>
                <LazyMissionComponent />
            </Suspense>
            <Suspense fallback={renderLoading()}>
                <LazyChooseComponent />
            </Suspense>
            <Suspense fallback={renderLoading()}>
                <LazyServiceComponent />
            </Suspense>
            <Suspense fallback={renderLoading()}>
                <LazyCustomerComponent />
            </Suspense>
            <Suspense fallback={renderLoading()}>
                <LazyNewsComponent />
            </Suspense>
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
    display: none;
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