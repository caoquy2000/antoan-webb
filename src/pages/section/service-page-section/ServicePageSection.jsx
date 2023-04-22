import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';
import { ContainerWrapper } from "Container";
import CardCpn from "component/card-cpn/CardCpn";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";

const ServicePageSection = (props) => {
    return (
        <ServicePageSectionWrapper>
            <ContainerWrapper>
                <ServicePageSectionContainer>
                    <ServicePageTitle>
                        DỊCH VỤ CỦA CHÚNG TÔI
                    </ServicePageTitle>
                    <PageContainer>
                        <ServiceList>
                        {
                            serviceMock && serviceMock.map((item) => (
                                <div>
                                    <CardCpn 
                                        img={item.banner}
                                        heightImg='210'
                                        alt={item.alt}
                                        title={item.title}
                                        content={item.description}
                                        cardStyle={{
                                            borderRadius: '8px',
                                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                            background: variable.WHITE_COLOR,
                                            height: '100%',
                                        }}
                                        titleStyle={{
                                            fontFamily: 'OSB',
                                            fontSize: '20px',
                                            color: variable.MAIN_COLOR,
                                            paddingBottom: '8px',
                                        }}
                                        contentStyle={{
                                            fontFamily: 'sans-serif',
                                            fontSize: '16px',
                                            color: variable.TEXT_DESCRIPTION_COLOR,
                                            lineHeight: '22px',
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            '-webkit-line-clamp': '3',
                                            '-webkit-box-orient': 'vertical',
                                        }}
                                        bodyStyle={{
                                            padding: '22px',
                                        }}
                                    />
                                </div>
                            ))
                        }
                        </ServiceList>
                        <ServiceBanner>
                            <BannerHotline />
                            <SendPhoneWrapper>
                                <BannerSendPhone />
                            </SendPhoneWrapper>
                        </ServiceBanner>
                    </PageContainer>
                </ServicePageSectionContainer>
            </ContainerWrapper>
        </ServicePageSectionWrapper>
    );
};

const ServicePageSectionWrapper = styled.section`
    margin-top: 100px;
    @media (max-width: 550px) {
        margin-top: 50px;
    }
`;

const ServicePageSectionContainer = styled.div`
    padding-top: 26px;
    padding-bottom: 60px;
`;

const ServicePageTitle = styled.h2`
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    text-transform: uppercase;
    color: ${variable.RED_COLOR};
    padding-bottom: 15px;
`;

const PageContainer = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

const ServiceList = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 87px;
    row-gap: 64px;
    @media (max-width: 1200px) {
        gap: 20px 35px;
    }
    @media (max-width: 1000px) {
        width: 100%;
        gap: 55px 100px;
    }
    @media (max-width: 800px) {
        gap: 30px 50px;
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const SendPhoneWrapper = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

const ServiceBanner = styled.div`
    width: 50%;
    padding-left: 100px;
    @media (max-width: 1200px) {
        padding-left: 40px;
    }
    @media (max-width: 1000px) {
        width: 100%;
        padding-left: initial;
    }
`;

const serviceMock = [
    {
        banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Bảo Vệ Mục Tiêu Cố Định',
        title: 'Bảo Vệ Mục Tiêu Cố Định',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo...',
    },
    {
        banner: './img/bao-ve-giu-xe.png',
        alt: 'Bảo Vệ Giữ Xe',
        title: 'Bảo vệ Giữ xe',
        description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...',
    },
    {
        banner: './img/bao-ve-chat-luong-cao.png',
        alt: 'Bảo vệ chất lượng cao',
        title: 'Bảo vệ chất lượng cao',
        description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...',
    },
    {
        banner: './img/bao-ve-su-kien-le-hoi.png',
        alt: 'Bảo Vệ Sự Kiện, Lễ hội',
        title: 'Bảo Vệ Sự Kiện, Lễ hội',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    },
    {
        banner: './img/bao-ve-yeu-nhan.png',
        alt: 'Bảo Vệ Yếu Nhân',
        title: 'Bảo Vệ Yếu Nhân',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    },
    {
        banner: './img/bao-ve-muc-tieu-di-dong.png',
        alt: 'Bảo Vệ Mục Tiêu Di Động',
        title: 'Bảo Vệ Mục Tiêu Di Động',
        description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...',
    },
    {
        banner: './img/bao-ve-khu-cong-nghiep.png',
        alt: 'Bảo Vệ Khu Công Nghiệp',
        title: 'Bảo Vệ Khu Công Nghiệp',
        description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...',
    },
    {
        banner: './img/bao-ve-xe-van-chuyen.png',
        alt: 'Bảo vệ xe vận chuyển',
        title: 'Bảo vệ xe vận chuyển',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    }
];

export default ServicePageSection;