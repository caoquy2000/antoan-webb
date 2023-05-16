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
                                fontFamily: "'Tinos', serif",
                                fontSize: '24px',
                            }}
                            bodyContent1={'Tốt nghiệp từ nhiều trường đại học nổi tiếng về kinh tế và quản lí nhân sự. Bảo Vệ An Toàn được xây dựng từ ban lãnh đạo chất lượng, giàu kinh nghiệm. Với nguồn vốn đầu tư lớn, Bảo Vệ An Toàn đã hoạt động ổn định hơn 10 năm trong lĩnh vực dịch vụ bảo vệ.'}
                            bodyContent2={'Làm việc với hàng nghìn khách hàng khác nhau trong đó có những khách hàng lớn như thegioididong, AEON Mall, Co.op Food đặc biệt các chung cư, trường học, nhà máy có quy mô lớn. Bảo Vệ An Toàn vẫn luôn hoàn thành tốt nghiệm vụ và được khách hàng tin tưởng sử dụng dịch vụ lâu dài.'}
                        />
                        <div className="icon_intro icon_1">
                            <img src="./img/1.svg" alt="icon 1" />
                        </div>
                        <div className="icon_intro icon_2">
                            <img src="./img/2.svg" alt="icon 2" />
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