import { ContainerFuildWrapper } from "Container";
import TextBox from "component/text-box/TextBox";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const IntroSection = (props) => {
    return (
        <React.Fragment>
            <IntroWrapper>
                <ContainerFuildWrapper>
                    <IntroImage>
                        <img src="./img/bao-ve-an-toan-gioi-thieu.png" alt="Bao Ve An Toan Gioi Thieu" />
                    </IntroImage>
                    <IntroContent>
                        <TextBox 
                            tagTitle={'h2'}
                            titleStyle={{
                                fontFamily: 'OSB',
                                fontSize: '32px',
                                marginBottom: '12px',
                            }}
                            titleContent={'GIỚI THIỆU VỀ BẢO VỆ AN TOÀN'}
                            bodyStyle={{
                                fontFamily: 'LTR',
                                fontSize: '24px',
                            }}
                            bodyContent1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.'}
                            bodyContent2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.'}
                        />
                        <div className="icon_intro icon_1">
                            <img src="./img/1.svg" alt="" />
                        </div>
                        <div className="icon_intro icon_2">
                            <img src="./img/2.svg" alt="" />
                        </div>
                    </IntroContent>
                </ContainerFuildWrapper>
            </IntroWrapper>
        </React.Fragment>
    );
};

const IntroWrapper = styled.section`
    ${ContainerFuildWrapper} {
        display: flex;
        align-items: center;
    }
    @media (max-width: ${variable.SM_MAX}) {
        ${ContainerFuildWrapper} {
            display: initial;
        }
    }
`;

const IntroImage = styled.div`
    padding: 10px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: ${variable.SM_MAX}) {
        width: 100%;
    }
`;

const IntroContent = styled.div`
    width: 50%;
    padding: 0px 10px 0px 90px;
    position: relative;
    .icon_intro {
        position: absolute;
    }
    .icon_intro.icon_1 {
        left: 50%;
        bottom: -100%;
        transform: translateX(-50%);
    }
    .icon_intro.icon_2 {
        top: 90%;
        right: 30%;
    }
    @media (max-width: 1200px) {
        padding: 0px 10px 0px 20px;
        .icon_intro.icon_1 {
            display: none;
        }
    }

    @media (max-width: ${variable.SM_MAX}) {
        width: 100%;
    }

    @media (max-width: 500px) {
        padding: 0px 15px 0px 15px;
        .title_textbox {
            font-size: 22px !important;
        }
        .content_textbox {
            font-size: 18px !important;
        }
    }
`; 

export default IntroSection;