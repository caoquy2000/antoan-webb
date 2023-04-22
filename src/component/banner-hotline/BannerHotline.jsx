import React from 'react'
import styled from 'styled-components';
import * as variable from 'common/variable';

const BannerHotline = (props) => {
    return (
        <BannerHotlineWrapper>
            <BannerHotlineImg>
                <div className='img_wrapper'>
                    <img src="./img/banner-hotline.png" alt="Banner Hotline" />
                </div>
                <div className='text_wrapper'>
                    <span>
                        Chăm sóc khách hàng 24/7
                    </span>
                </div>
            </BannerHotlineImg>
            <BannerHotlineContent>
                <span>
                    HotLine:  0914.68.9999 - 0924.12.9999
                </span>
            </BannerHotlineContent>
        </BannerHotlineWrapper>  
    );
};

const BannerHotlineWrapper = styled.div`
    width: 100%;
    background-color: ${variable.MAIN_COLOR};
    color: ${variable.WHITE_COLOR};
`;

const BannerHotlineImg = styled.div`
    display: flex;
    .img_wrapper {
        width: 50%;
        height: 0;
        padding-bottom: 34%;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .text_wrapper {
        width: 50%;
        padding: 40px;
    }
    @media (max-width: 1000px) {
        .text_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media (max-width: 550px) {
        display: initial;
        .img_wrapper {
            width: 100%;
            padding-bottom: 59%;
        }
        .text_wrapper {
            width: 100%;
            text-align: center;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 0px;
        }
    }
    span {
        font-family: 'OSB';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 44px;
        text-transform: uppercase;
    }
`;

const BannerHotlineContent = styled.div`
    padding: 30px 50px;
    text-align: center;
    span {
        display: inline-block;
        font-family: 'OSB';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 44px;
    }
    @media (max-width: 1400px) {
        padding: 30px 0px;
    }
`;

export default BannerHotline;