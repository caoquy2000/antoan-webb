import { ContainerWrapper } from "Container";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';
import CardCpn from "component/card-cpn/CardCpn";

const ServiceSection = (props) => {
    return (
        <ServiceWrapper>
            <ContainerWrapper>
                <ServiceTitle>
                    Dịch Vụ Của Chúng Tôi
                </ServiceTitle>
                <ServiceList>
                   {
                        serviceMock && serviceMock.map((item) => (
                            <ServiceItem>
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
                                    }}
                                    bodyStyle={{
                                        padding: '22px',
                                    }}
                                />
                            </ServiceItem>
                        ))
                   }
                </ServiceList>
            </ContainerWrapper>
        </ServiceWrapper>
    );
};

const ServiceWrapper = styled.section`
    margin-top: 90px;
    background-color: ${variable.GRAY_COLOR};
`;

const ServiceTitle = styled.h3`
    color: ${variable.RED_COLOR};
    font-family: 'OSB';
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 22px;
`;

const ServiceList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 64px;
    padding-bottom: 60px;
`;

const ServiceItem = styled.div`

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

export default ServiceSection;